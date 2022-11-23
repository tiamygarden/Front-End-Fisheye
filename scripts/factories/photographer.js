function photographerFactory(data) {
    const { name, portrait, country, city, tagline, price } = data;

    const picture = `assets/images/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        const h3 = document.createElement( 'h3' );
        h3.textContent = country + "/" +city;
        article.appendChild(h3);
        const p= document.createElement( 'p' );
        p.textContent = tagline;
        article.appendChild(p);
        const span = document.createElement( 'span' );
        span.textContent = price+"€/jour";
        article.appendChild(span);
        return (article);
    }
    return { name, picture, country, city, tagline, price, getUserCardDOM }
}
