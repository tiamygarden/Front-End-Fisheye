export function photographerHeaderPageFactory(dataPage) {
    const { name, portrait, city, country, tagline } = dataPage;

    const picturePage = `assets/images/photographers/portrait/${portrait}`;

    function PhotographerHeaderDOM() {
        const article = document.createElement('article');
        article.classList.add('photograph_header');

        article.innerHTML = `
        <div class="photograph-info" aria-label="informations" tabindex="0">
            <div class="photograph-name" aria-label="nom">
                <h1>${name}</h1>
            </div>
            <div class="photograph-txt" aria-label="origines et tagline">
                <h2>${city}, ${country}</h2>
                <p>${tagline}</p>
            </div>
        </div>
        <div class="photograph_column-center">
            <button type="button" class="contact_me contact_button" onclick="displayModal()" aria-label="contactez-moi">Contactez-moi</button>
        </div>
        <div class="photograph_column-right" tabindex="0">  
            <div class="photographer_portrait">
                <img src="${picturePage}" alt="${name}"/>
            </div>  
        </div>
        `;
        return (article);
    }

    return { PhotographerHeaderDOM };
}
