export function photographersFactory(data) {
    const { name, id, portrait, country, city, tagline, price } = data;

    const picture = `assets/images/photographers/portrait/${portrait}`;

    function getPhotographerDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML = `
            <a href="photographer.html?id=${id}">
                <img src="${picture}" alt="${name}">
                <h2>${name}</h2>
            </a>
            <p class="location" aria-label="localisation">${city}, ${country}</p>
            <p class="tagline" aria-label="tagline">${tagline}</p>
            <p class="price" aria-label="prix €/jour">${price}€/jour</p>
        `;
        return (article);
    }
    return {getPhotographerDOM};
}
