import fetchFromSource from '../utils/fetchFromSource.js';
import { photographerPageFactory } from '../factories/photographerPageFactory.js';
import { mediasFactory } from '../factories/mediasFactory.js';

// fetch les datas des photographes
const { photographers, medias } = await fetchFromSource();
// console.log(medias.filter(media => media.photographerId === 82));

//Récupère id du photographe de l'URL
const IDphotographer = (new URLSearchParams(document.location.search.substring(1))).get('id');

//filtre le photographe avec son id
const photographerInfos = photographers.find((photographer) => photographer.id === parseInt(IDphotographer));
// console.log(photographerInfos);
// show header photographer
// const PhotographerSection = document.querySelector('.photograph_header_section');
// const PhotographerPageModel = photographerPageFactory(photographerInfos);
// const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
// PhotographerSection.appendChild(PhotographerDOM);
document.querySelector('#photographHeaderSection').appendChild(
    photographerPageFactory(photographerInfos).PhotographerHeaderDOM()
);

mediasFactory(medias.filter((medias => medias.photographerId === parseInt(IDphotographer))));
MediasFactory.displayOrderBy();
MediasFactory.displayList();

// display formulaire
// displayContactForm(photographerInfos);
