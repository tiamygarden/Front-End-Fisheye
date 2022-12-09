import fetchFromSource from '../utils/fetchFromSource.js';
import { photographerPageFactory } from '../factories/photographerPageFactory.js';
import { photographerPageMediaFactory } from '../factories/photographerPageMediaFactory.js';
import { mediaFilterFactory } from '../factories/mediaFilterFactory.js';

// fetch les datas des photographes
const { photographers, medias } = await fetchFromSource();
// console.log(medias.filter(media => media.photographerId === 82));

//Récupère id du photographe de l'URL
const IDphotographer = (new URLSearchParams(document.location.search.substring(1))).get('id');

//filtre le photographe avec son id
const ShowPhotographer = photographers.find((photographer) => photographer.id === parseInt(IDphotographer));
// console.log(ShowPhotographer);
// show header photographer
const PhotographerSection = document.querySelector('.photograph_header_section');
const PhotographerPageModel = photographerPageFactory(ShowPhotographer);
const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
PhotographerSection.appendChild(PhotographerDOM);

const PhotographerMedias = medias.filter((medias => medias.photographerId === parseInt(IDphotographer)));
// console.log(PhotographerMedias);

// show photographer's medias
const photographerMediasSection = document.querySelector('.photograph_medias_section');

PhotographerMedias.forEach((media) => {
    const photographerPageMediaModel = photographerPageMediaFactory(media);
    const MediasDOM = photographerPageMediaModel.PhotographerMediasDOM();
    photographerMediasSection.appendChild(MediasDOM);
});

function MediaFilterDOM() {
    const SortButtonSection = document.getElementById('mediasOrderBy');
    const buttonSort = mediaFilterFactory();
    SortButtonSection.appendChild(buttonSort);
}

MediaFilterDOM();

// display formulaire
displayContactForm(ShowPhotographer);
