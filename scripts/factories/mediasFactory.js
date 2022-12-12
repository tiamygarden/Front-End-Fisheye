import { photographerPageMediaFactory } from './photographerPageMediaFactory.js';

export function mediasFactory(medias) {
    window.addEventListener('sortEvent', (event) => {
        displayList(event.detail);
        console.log('detail', event.detail);
    });

    function displayOrderBy() {
        const article = document.createElement('div');
        article.innerHTML = `
                            <label tabindex="0" class="media_filter">
                                Trier par
                                <select id="select_images" onchange="window.dispatchEvent(new CustomEvent('sortEvent',{detail:value}))" tabindex="0" >
                                  <option value="">Popularité</option>
                                  <option value="date">Date</option>
                                  <option value="title">Titre</option>
                                </select>
                                <i class="fas fa-chevron-down arrow-down"></i>
                            </label>
                            `;

        document.getElementById('mediasOrderBy').appendChild(article);
    }

    function displayList(sortType = null) {
        const photographerMediasSection = document.querySelector('.photograph_medias_section');
        photographerMediasSection.innerHTML = '';

        sortMedias(sortType).forEach((media) => {
            const photographerPageMediaModel = photographerPageMediaFactory(media);
            const MediasDOM = photographerPageMediaModel.PhotographerMediasDOM();
            photographerMediasSection.appendChild(MediasDOM);
        });
    }

    function sortMedias(sortType) {
        // console.log(sortType);
        switch (sortType) {
            case 'date':
                return medias.sort((a, b) => new Date(b.date)- new Date(a.date));
            case 'title':
                return medias.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return medias.sort((a, b) => b.likes - a.likes);
        }
    }

    return { displayOrderBy, displayList };
}
