import { photographerPageMediasFactory } from './photographerPageMediasFactory.js';
import useLightbox from '../lib/useLightbox.js';

export function mediasFactory(medias, photographer) {
    let orderBy = 'popularity'

    function sortBy(order) {
        orderBy = order;
        displayOrderBy();
        displayList(order);
    }

    function displayOrderBy() {
        const options = [
            { label: 'Popularité', value: 'popularity' },
            { label: 'Date', value: 'date' },
            { label: 'Titre', value: 'title' },
        ];

        const mediasOrderByPlaceholder = document.querySelector('.mediasOrderByPlaceholder');
        let optionsHtml = '';

        options.forEach(option => {
            if (option.value !== orderBy)
                optionsHtml += `<li class="sort" onclick="window.mediasFactory.sortBy('${option.value}')" aria-label="options de tri par popularité date ou titre">
                                    ${options.find(o => o.value === option.value)?.label}
                                </li>`;
            // });

            mediasOrderByPlaceholder.innerHTML = `<div class="mediasOrderBy">
            <div class="mediasOrderBy__Current" onclick="mediasFactory.sortBy('${'popularity'}')">
                ${options.find(o => o.value === orderBy)?.label}
            </div>
            <ul class="mediasOrderBy__Options" tabindex="0">
                ${optionsHtml}
            </ul>
        </div>`;

            options.forEach((option) => {
                const li = document.createElement('li');
                li.textContent = option.label;
                li.classList.add('sort', 'mediasOrderBy', 'sort--hidden');
                li.setAttribute('data-value', option.value);
                li.setAttribute('tabindex', '0');
                li.setAttribute('aria-label', option.value);
                li.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        sortBy(option.value);
                    }
                });
                mediasOrderByPlaceholder.appendChild(li);
            });
        });
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
        // Déclare et initialise la variable totalLikes
        let totalLikes = medias.reduce((acc, cur) => acc + cur.likes, 0);
        // Récupére l'élément de prix du photographe
        const price = photographer.price;

        // Récupére l'élément de modal de likes
        const likesModalElement = document.querySelector('#likesModal');
        likesModalElement.innerHTML = `
            <div class="likes__modal__likes" tabindex="0">
                <span id="totalLikes" tabindex="0">${totalLikes}</span>
                <i class="fa-solid fa-heart heartIcon" aria-label="likes" tabindex="0"></i>
            </div>
            <div class="likes__modal__price" aria-label="prix par jour" tabindex="0">
                ${price}&euro; / jour
            </div>
        `;

        return likesModalElement;
    }

    return { displayList, displayOrderBy, displayRecap, medias, sortBy };
}
