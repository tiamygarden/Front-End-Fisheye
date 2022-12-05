import fetchPhotographers from "../utils/fetchPhotographers.js";


async function displayData() {
    const photographersSection = document.querySelector(".photographer_section");
    const photographers= await fetchPhotographers();
console.log(photographers);
    photographers.forEach((photographer) => {
        photographersSection.appendChild(
            photographerFactory(photographer).getPhotographerDOM()
                );
        console.log(photographerFactory(photographer).id);
    });

}
await displayData();

// function init() {
// // Récupèrer les datas des photographes
//
// fetch("../data/photographers.json")
//     .then(response => response.json())
//     .then(data => displayData(data.photographers))
//     .catch(error => console.log(error));
//
// }
//
// init();

