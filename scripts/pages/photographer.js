import fetchFromSource from '../utils/fetchFromSource.js';
import { photographerHeaderPageFactory } from '../factories/photographerHeaderPageFactory.js';
import { mediasFactory } from '../factories/mediasFactory.js';
import { useLikes } from '../utils/useLikes.js';

// fetch les datas des photographes
const { photographers, medias } = await fetchFromSource();

//Récupère id du photographe de l'URL
const IDphotographer = (new URLSearchParams(document.location.search.substring(1))).get('id');

//filtre le photographe avec son id
const photographerInfos = photographers.find((photographer) => photographer.id === parseInt(IDphotographer));
// show header photographer
document.querySelector('#photographHeaderSection').appendChild(photographerHeaderPageFactory(photographerInfos).PhotographerHeaderDOM());
//Refacto des lignes ci-dessous
// const PhotographerSection = document.querySelector('#photographHeaderSection');
// const PhotographerPageModel = photographerHeaderPageFactory(photographerInfos);
// const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
// PhotographerSection.appendChild(PhotographerDOM);

window.mediasFactory = mediasFactory(medias.filter((medias => medias.photographerId === parseInt(IDphotographer))), photographerInfos);
window.mediasFactory.displayOrderBy();
window.mediasFactory.displayList();
window.mediasFactory.displayRecap();

window.useLike = useLikes();

// // display formulaire
// displayContactForm(photographerInfos);
document.querySelector('#photographerNicknameAndName').innerHTML = `<h3>${photographerInfos.name}</h3>`;
