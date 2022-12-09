export function PhotographerPageMediaFactory(dataMedia) {
    const { id, image, video, title, alt, likes, price, photographerId} = dataMedia;

const picture = `assets/images/photographers/${photographerId}/${image}`;
    const videoUrl = `assets/videos/${photographerId}/${video}`;

    function PhotographerMediasDOM() {
        const article = document.createElement('article');
        article.classList.add('photograph_media', id);

        if (video !== undefined) {
            article.innerHTML = `
        <video class="photograph_media_movie" aria-label="${alt}" controls>
            <source class="photograph_media_all" src="${videoUrl}" type="video/mp4">
        </video>`;
        } else {
            article.innerHTML = `
            <div class="photograph_media_picture">
                <div class="photograph_media_all" tabindex="2">
                <img src="${picture}" alt="${alt}"/>
                </div>
            </div>
            <div class="photograph_media_infos">
                <div class="photograph_media_title" tabindex="2">
                    <h3>${title}</h3>
                </div>
                <div class="photograph_media_likes" tabindex="2">
                    <p>${likes}
                    <i id ="heart-icon" class="fa-solid fa-heart"></i>
                    </p>
                </div>
            </div>
            <div class="photograph_media">
                <div class="photograph_media_price" tabindex="2">
                    <p>${price}€</p>
                </div>
            </div>
            `;

        }
        return article;
    }

    return { PhotographerMediasDOM };
}

