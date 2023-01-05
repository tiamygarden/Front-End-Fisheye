export function photographerPageMediasFactory(dataMedia) {
    const { id, image, video, title, likes, price, photographerId } = dataMedia;

    const picture = `assets/images/photographers/${photographerId}/${image}`;
    const videoUrl = `assets/images/photographers/${photographerId}/${video}`;

    function PhotographerMediasDOM() {
        const article = document.createElement('article');
        article.classList.add('photograph_media', id);

        if (video !== undefined) {
            article.innerHTML += `
            <video class="photograph_media_movie lightbox" src="${videoUrl}" title="${title}" aria-label="${title}" tabindex="0">
                <source class="photograph_media_all" src="${videoUrl}" type="video/mp4">
            </video>
            <div class="photograph_media_infos">
                <div class="photograph_media_title" aria-label="${title}" tabindex="0">
                    <h3>${title}</h3>
                </div>
                <div class="photograph_media_likes" onclick="window.useLike.toggle(this)" aria-label="like" tabindex="0">
                    <div class="likesCount">${likes}</div>
                    <i class="fa-solid fa-heart heartIcon" aria-label="like" tabindex="0"></i>
                </div>
            </div>
            `;
        } else {
            article.innerHTML += `
            <div class="photograph_media_picture">
                <div class="photograph_media_all" tabindex="0">
                    <img src="${picture}" alt="${title}" class="lightbox" />
                </div>
            </div>
            <div class="photograph_media_infos">
                <div class="photograph_media_title" aria-label="${title}" tabindex="0">
                    <h3>${title}</h3>
                </div>
                <div class="photograph_media_likes" onclick="window.useLike.toggle(this)" aria-label="like" tabindex="0">
                    <div class="likesCount">${likes}</div>
                    <i class="fa-solid fa-heart heartIcon" aria-label="like" tabindex="0"></i>
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
