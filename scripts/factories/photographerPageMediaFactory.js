export function photographerPageMediaFactory(dataMedia) {
    const { id, image, video, title, alt, likes, price, photographerId } = dataMedia;

    const picture = `assets/images/photographers/${photographerId}/${image}`;
    const videoUrl = `assets/images/photographers/${photographerId}/${video}`;

    function PhotographerMediasDOM() {
        const article = document.createElement('article');
        article.classList.add('photograph_media', id);

        if (video !== undefined) {
            article.innerHTML = `
            <video class="photograph_media_movie" aria-label="${alt}" controls>
                <source class="photograph_media_all" src="${videoUrl}" type="video/mp4">
            </video>
            <div class="photograph_media_infos">
                <div class="photograph_media_title">
                    <h3>${title}</h3>
                </div>
                <div class="photograph_media_likes">
                    <p id="heartCount">${likes}
                    <i id ="heartIcon" class="fa-solid fa-heart"></i>
                    </p>
                </div>
            </div>
            `;
        } else {
            article.innerHTML = `
            <div class="photograph_media_picture">
                <div class="photograph_media_all">
                <img src="${picture}" alt="${alt}"/>
                </div>
            </div>
            <div class="photograph_media_infos">
                <div class="photograph_media_title">
                    <h3>${title}</h3>
                </div>
                <div class="photograph_media_likes">
                    <p id="heartCount">${likes}
                    <i id ="heartIcon" class="fa-solid fa-heart"></i>
                    </p>
                </div>
            </div>
            <div class="photograph_media">
                <div class="photograph_media_price">
                    <p>${price}€</p>
                </div>
            </div>
            `;
        }
        return article;
    }

    return { PhotographerMediasDOM };
}
