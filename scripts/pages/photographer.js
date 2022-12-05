import fetchFromSource from '../utils/fetchFromSource.js';
import { PhotographerPageFactory } from '../factories/PhotographerPageFactory.js';

// fetch les datas des photographes
const { photographers, medias } = await fetchFromSource();
// console.log(medias.filter(media => media.photographerId === 82));

//Récupère id du photographe de l'URL
const IDphotographer = (new URLSearchParams(document.location.search.substring(1))).get('id');

//filtre le photographe avec son id
const Showphotographer = photographers.find((photographer) => photographer.id === parseInt(IDphotographer));

// show header photographer
const PhotographerSection = document.querySelector('.photograph_header_section');
const PhotographerPageModel = PhotographerPageFactory(Showphotographer);
const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
PhotographerSection.appendChild(PhotographerDOM);


// display formulaire
// displayContactForm(Showphotographer);
