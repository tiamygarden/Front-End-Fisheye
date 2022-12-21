import { photographerPageMediaFactory } from './photographerPageMediaFactory.js';

export function mediasFactory(medias, photographer) {
    window.addEventListener('sortEvent', (event) => {
        window.mediasorderBy = { selected: event.detail };
        displayOrderBy();
        displayList(event.detail);
    });

    function sortByLabelSelectedResult(){
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
            const photographerPageMediaModel = photographerPageMediaFactory(media);
            const MediasDOM = photographerPageMediaModel.PhotographerMediasDOM();
            photographerMediasSection.appendChild(MediasDOM);
        });
        // console.log("DOM photographerMediasSection", photographerMediasSection);
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
        const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
        const price= photographer.price;

        const cardTotalLikes = document.getElementById('likesModal');
        cardTotalLikes.innerHTML  = `
                            <div class="likes__modal__likes">
                                ${totalLikes}
                                <i class="fa-solid fa-heart" aria-label="likes"></i>
                            </div>
                            <div class="likes__modal__price">
                                ${price}&euro; / jour
                            </div>
                            `;
    }

    return { displayList, displayOrderBy, displayRecap, medias };
}
