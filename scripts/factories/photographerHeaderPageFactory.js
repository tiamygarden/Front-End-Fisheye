export function photographerHeaderPageFactory(dataPage) {
    const { name, portrait, city, country, tagline, alt } = dataPage;

    const picturePage = `assets/images/photographers/portrait/${portrait}`;

    function PhotographerHeaderDOM() {
        const article = document.createElement('article');
        article.classList.add('photograph_header');

        article.innerHTML = `
        <div class="photograph-info">
            <div class="photograph-name">
                <h1>${name}</h1>
            </div>
            <div class="photograph-txt">
                <h2>${city}, ${country}</h2>
                <p>${tagline}</p>
            </div>
        </div>  
        <div class="photograph_column-center">
            <button type="button" class="contact_me contact_button">Contactez-moi</button>
        </div>
        <div class="photograph_column-right">
            <div class="photographer_portrait">
                <img src="${picturePage}" alt="${alt}"/>
            </div>  
        </div>
        `;
        return (article);
    }

    return { PhotographerHeaderDOM };
}
