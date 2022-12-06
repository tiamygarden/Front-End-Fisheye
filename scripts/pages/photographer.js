import fetchFromSource from '../utils/fetchFromSource.js';
import { PhotographerPageFactory } from '../factories/PhotographerPageFactory.js';
import { PhotographerPageMediaFactory } from '../factories/PhotographerPageMediaFactory.js';

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
const PhotographerPageModel = PhotographerPageFactory(ShowPhotographer);
const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
PhotographerSection.appendChild(PhotographerDOM);

const PhotographerMedias = medias.filter((medias => medias.photographerId === parseInt(IDphotographer)));
// console.log(PhotographerMedias);

// show photographer's medias
const photographerMediasSection = document.querySelector('.photograph_medias_section');
PhotographerMedias.forEach((media) => {
    const photographerPageMediaModel = PhotographerPageMediaFactory(media);
    const MediasDOM = photographerPageMediaModel.PhotographerMediasDOM();
    photographerMediasSection.appendChild(MediasDOM);
});

// display formulaire
displayContactForm(ShowPhotographer);
