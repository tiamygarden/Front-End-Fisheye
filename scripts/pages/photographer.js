// header pour chaque photographe
function displayPhotographerData(photograph) {
    const PhotographerSection = document.querySelector(
        ".photograph_header_section"
    );

    photograph.filter((identitee) => {
        const PhotographerPageModel = photographerPageFactory(identitee);
        const PhotographerDOM = PhotographerPageModel.PhotographerHeaderDOM();
        PhotographerSection.appendChild(PhotographerDOM);
    });
}

function initPhotographer() {
    // fetch les datas des photographes
    fetch("./data/photographers.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            //Récupère id du photographe de l'URL
            const IDphotographer = new URLSearchParams(
                document.location.search.substring(1)
            );
            const idURL = IDphotographer.get("id");

            const { photographers } = data;
            // const { media } = data;

            //filtre le photographe avec son id
            const Showphotographer = photographers.filter(
                (photographer) => photographer.id === parseInt(idURL)
            );

            // show header photographer
            displayPhotographerData(Showphotographer);

            // display formulaire
            displayContactForm(Showphotographer);
        });
}
initPhotographer();
