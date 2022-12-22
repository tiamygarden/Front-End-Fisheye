import fetchFromSource from '../utils/fetchFromSource.js';
import { photographersFactory } from '../factories/photographersFactory.js';


const photographersSection = document.getElementById('photographer_section');
const { photographers } = await fetchFromSource();

photographers.forEach((photographer) => {
    photographersSection.appendChild(photographersFactory(photographer).getPhotographerDOM());
});

// await initPhotographer();

