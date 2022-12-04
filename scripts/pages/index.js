function displayData(photographers) {
const photographersSection = document.querySelector(".photographer_section");

photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getPhotographerDOM();
    photographersSection.appendChild(userCardDOM);
});
}

function init() {
// Récupèrer les datas des photographes

fetch("../data/photographers.json")
    .then(response => response.json())
    .then(data => displayData(data.photographers))
    .catch(error => console.log(error));

}

init();
