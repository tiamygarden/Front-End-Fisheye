export function photographerPageFactory(dataPage) {
    const { id, name, portrait, city, country, tagline, alt } = dataPage;

    const picturePage = `assets/images/photographers/portrait/${portrait}`;

    function PhotographerHeaderDOM() {
        const article = document.createElement('article');
        article.classList.add('photograph_header', id);
        // article.classList.add(id);

        article.innerHTML = `
        <div class="photograph-info">
            <div class="photograph-name" tabindex="2">
                <h1>${name}</h1>
            </div>
            <div class="photograph-txt" tabindex="2">
                <h2>${city}, ${country}</h2>
                <p>${tagline}</p>
            </div>
        </div>  
        <div class="photograph_column-center">
            <button tabindex="2" type="button" class="contact_me contact_button">Contactez-moi</button>
        </div>
        <div class="photograph_column-right">
            <div class="photographer_portrait" tabindex="2">
                <img src="${picturePage}" alt="${alt}"/>
            </div>  
        </div>
        `;
        return (article);
    }

    return { PhotographerHeaderDOM };
}
