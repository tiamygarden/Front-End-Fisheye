import fetchFromSource from '../utils/fetchFromSource.js';
import { photographerPageFactory } from '../factories/photographerPageFactory.js';
import { mediasFactory } from '../factories/mediasFactory.js';
// import { lightBoxFactory } from '../factories/lightBoxFactory.js';

// fetch les datas des photographes
const { photographers, medias } = await fetchFromSource();

//Récupère id du photographe de l'URL
const IDphotographer = (new URLSearchParams(document.location.search.substring(1))).get('id');

//filtre le photographe avec son id
const photographerInfos = photographers.find((photographer) => photographer.id === parseInt(IDphotographer));
// show header photographer
document.querySelector('#photographHeaderSection').appendChild(photographerPageFactory(photographerInfos).PhotographerHeaderDOM());
//Refacto des lignes ci-dessous
// const PhotographerSection = document.querySelector('#photographHeaderSection');
// const PhotographerPageModel = photographerPageFactory(photographerInfos);
// const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
// PhotographerSection.appendChild(PhotographerDOM);

const MediasFactory = mediasFactory(medias.filter((medias => medias.photographerId === parseInt(IDphotographer))), photographerInfos);
MediasFactory.displayOrderBy();
MediasFactory.displayList();
MediasFactory.displayRecap();


// show lightbox
// const LightBoxFactory = lightBoxFactory(photographerInfos);
//
// document.querySelector('.photograph_media_picture img').addEventListener('click', (event) => {
//     event.preventDefault();
//     LightBoxFactory.lightBoxDOM();
// });

// LightBoxFactory.addClickHeart();
//
// AddClickHeart();
//
// // display formulaire
// displayContactForm(photographerInfos);
