export function lightBoxFactory(data) {
    const { image, video, title, alt, photographerId } = data;

    const picture = `assets/images/photographers/${photographerId}/${image}`;
    const videoUrl = `assets/images/photographers/${photographerId}/${video}`;

    function lightBoxDOM() {
        const lightBox = document.createElement('div');
        lightBox.classList.add('lightbox--open');

        if (video !== undefined) {
        lightBox.innerHTML = `
                            <div class="lightbox__container">
                                <video class="photograph_media_movie" aria-label="${alt}" controls>
                                    <source class="photograph_media_all" src="${videoUrl}" type="video/mp4">
                                </video>                                
                                <div class="lightbox__container__btn">
                                    <button class="lightbox__container__btn__close">
                                        <i class="fas fa-times" aria-label="fermer"></i>
                                    </button>
                                </div>
                                <div class="photograph_media_infos">
                                    <div class="photograph_media_title">
                                        <h3>${title}</h3>
                                    </div>
                                </div>
                            </div>
                            `;
        } else {
        lightBox.innerHTML = `
                            <div class="lightbox__container">
                                <div class="photograph_media_picture">
                                    <div class="photograph_media_all">
                                        <img src="${picture}" alt="${alt}"/>
                                    </div>
                                </div>
                                <div class="lightbox__container__btn">
                                    <button class="lightbox__container__btn__close">
                                        <i class="fas fa-times" aria-label="fermer"></i>
                                    </button>
                                </div>
                                <div class="photograph_media_infos">
                                    <div class="photograph_media_title">
                                        <h3>${title}</h3>
                                    </div>
                                </div>
                            </div>
                            `;
        }
        return lightBox;
    }

    return { lightBoxDOM };
}
