import { photographerPageMediasFactory } from './photographerPageMediasFactory.js';
import useLightbox from '../lib/useLightbox.js';

export function mediasFactory(medias, photographer) {
    window.addEventListener('sortEvent', (event) => {
        window.mediasorderBy = { selected: event.detail };
        displayOrderBy();
        displayList(event.detail);
    });

    function sortByLabelSelectedResult() {
        const options = [
            { label: 'Popularité', value: 'popularity' },
            { label: 'Date', value: 'date' },
            { label: 'Titre', value: 'title' },
        ];

        const mediasOrderByPlaceholder = document.querySelector('.mediasOrderByPlaceholder');
        let optionsHtml = '';

        options.forEach(option => {
            if (option.value !== window.mediasorderBy.selected)
                optionsHtml += `<li tabindex="0" onclick="window.dispatchEvent(new CustomEvent('sortEvent', { detail:'${option.value}' }))">
                                    ${options.find(o => o.value === option.value)?.label}
                                </li>`;
        });

        mediasOrderByPlaceholder.innerHTML = `<div class="mediasOrderBy" tabindex="0">
            <div class="mediasOrderBy__Current">
                ${options.find(o => o.value === window.mediasorderBy.selected)?.label}
            </div>
            <ul class="mediasOrderBy__Options">
                ${optionsHtml}
            </ul>
        </div>`;
    }

    function displayOrderBy() {
        if (window.mediasorderBy?.selected === undefined)
            window.mediasorderBy = { selected: 'popularity' };
        sortByLabelSelectedResult();
    }

    function displayList(sortType = null) {
        const photographerMediasSection = document.querySelector('#photographMediasSection');
        photographerMediasSection.innerHTML = '';

        sortMedias(sortType).forEach((media) => {
            const photographerPageMediaModel = photographerPageMediasFactory(media);
            const MediasDOM = photographerPageMediaModel.PhotographerMediasDOM();
            photographerMediasSection.appendChild(MediasDOM);
        });

        window.lightbox = useLightbox();
    }

    function sortMedias(sortType) {
        switch (sortType) {
            case 'popularity':
                return medias.sort((a, b) => b.likes - a.likes);
            case 'date':
                return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'title':
                return medias.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return medias;
        }
    }

    function displayRecap() {
        // Déclarez et initialisez les variables currentLikes et totalLikes
        let currentLikes = 0;
        let totalLikes = medias.reduce((acc, cur) => acc + cur.likes, 0);

        // Récupérez l'élément de prix du photographe
        const price = photographer.price;

        // Récupérez l'élément de modal de likes
        const likesModalElement = document.querySelector('#likesModal');
        likesModalElement.innerHTML = `
            <div class="likes__modal__likes">
                <span id="totalLikes">${totalLikes}</span>
                <i class="fa-solid fa-heart heartIcon" aria-label="likes"></i>
            </div>
            <div class="likes__modal__price">
                ${price}&euro; / jour
            </div>
        `;

        return likesModalElement;
    }

            function addEventListeners(callback) {
            // Récupérez tous les éléments de bouton de cœur
            const heartIconButtons = document.querySelectorAll('main .heartIcon');
            heartIconButtons.forEach((heartIconButton) => {
                heartIconButton.addEventListener('click', () => {
                    // Trouvez l'élément de compteur associé au bouton de cœur cliqué
                    const counterElement = heartIconButton.parentElement.querySelector('.likesCount');
                    // Faites basculer le like
                    callback(heartIconButton, counterElement);
                    // Déclenchez un événement personnalisé pour signaler que le nombre total de likes a été modifié
                    window.dispatchEvent(new CustomEvent('totalLikesChanged', { detail: totalLikes }));
                });
            });
        }

        return { displayList, displayOrderBy, displayRecap, addEventListeners, medias };
    }
