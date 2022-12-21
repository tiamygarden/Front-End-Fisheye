import fetchFromSource from '../utils/fetchFromSource.js';
import { photographerPageFactory } from '../factories/photographerPageFactory.js';
import { mediasFactory } from '../factories/mediasFactory.js';
// import { lightBoxFactory } from '../factories/lightBoxFactory.js';
import useLightbox from '../lib/useLightbox.js';

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
// const sortedMedias = MediasFactory.medias;
// console.log(sortedMedias);
// show lightbox

const lightbox = useLightbox();

// const mediaSelector = document.querySelectorAll('.photograph_media_picture');
// mediaSelector.forEach((media) => {
//     media.addEventListener('click', (event) => {
//         const title = event.target.getAttribute('alt');
//         console.log("MediasFactory", MediasFactory);
//         const currentMedia = medias.find((media) => media.title === title);
//         const LightBoxFactory = lightBoxFactory(currentMedia);
//         const lightBoxDom = LightBoxFactory.lightBoxDOM();
//         const lightBoxDiv = document.getElementById('lightbox');
//         lightBoxDiv.innerHTML= '';
//         lightBoxDiv.style.display = 'flex';
//         lightBoxDiv.appendChild(lightBoxDom);
//     });
// });

// LightBoxFactory.addClickHeart();
//
// AddClickHeart();
//
// // display formulaire
// displayContactForm(photographerInfos);
