import fetchFromSource from '../utils/fetchFromSource.js';
import { photographerFactory } from '../factories/photographerFactory.js';


const photographersSection = document.getElementById('photographer_section');
const { photographers } = await fetchFromSource();

photographers.forEach((photographer) => {
    photographersSection.appendChild(photographerFactory(photographer).getPhotographerDOM());
});

// await initPhotographer();

