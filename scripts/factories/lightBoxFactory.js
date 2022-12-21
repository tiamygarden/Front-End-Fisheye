export function lightBoxFactory(data) {
    const { image, video, title, photographerId } = data;

    const picture = `assets/images/photographers/${photographerId}/${image}`;
    const videoUrl = `assets/images/photographers/${photographerId}/${video}`;

    function lightBoxDOM() {
        const lightBox = document.createElement('div');
        lightBox.classList.add('lightbox--open');

        if (video !== undefined) {
            lightBox.innerHTML = `
                <div class="lightbox__container">
                    <div class="lightbox__container__btn">
                        <i class="fa-solid fa-xmark"  onclick="closeLigthModal()" aria-label="fermer"></i>
                    </div>
                    <div class="inlignflex">
                    <i id="previous" onclick="previousMedia()" class="fa-solid fa-chevron-left"></i>
                    <video class="photograph_media_movie" aria-label="${title}" controls>
                        <source class="photograph_media_all" src="${videoUrl}" type="video/mp4">
                    </video>       
                        <i id="next" onclick="nextMedia()" class="fa-solid fa-chevron-right"></i>
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
                                <div class="lightbox__container__btn">
                                    <i class="fa-solid fa-xmark" onclick="closeLigthModal()" aria-label="fermer"></i>
                                </div>
                                <div class="inlignflex">
                                    <i id="previous" onclick="previousMedia()" class="fa-solid fa-chevron-left"></i>
                                <div class="photograph_media_picture">
                                    <div class="photograph_media_all">
                                        <img src="${picture}" alt="${title}"/>
                                    </div>
                                </div>
                                    <i id="next" onclick="nextMedia()" class="fa-solid fa-chevron-right"></i>
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

    // function previousMedia() {
    //     const previous = document.getElementById('previous');
    //     previous.addEventListener('click', () => {
    //         const currentMedia = document.querySelector('.lightbox--open');
    //         const currentMediaId = currentMedia.getAttribute('data-id');
    //         const currentMediaIndex = medias.findIndex((media) => media.id === currentMediaId);
    //         const previousMediaIndex = currentMediaIndex - 1;
    //         const previousMedia = medias[previousMediaIndex];
    //         const previousMediaId = previousMedia.id;
    //         const previousMediaDOM = document.querySelector(`[data-id="${previousMediaId}"]`);
    //         previousMediaDOM.click();
    //     });
    // }
    // previousMedia();

    // function nextMedia() {
    //     const next = document.getElementById('next');
    //     next.addEventListener('click', () => {
    //         const currentMedia = document.querySelector('.lightbox--open');
    //         const currentMediaId = currentMedia.getAttribute('data-id');
    //         const currentMediaIndex = medias.findIndex((media) => media.id === currentMediaId);
    //         const nextMediaIndex = currentMediaIndex + 1;
    //         const nextMedia = medias[nextMediaIndex];
    //         const nextMediaId = nextMedia.id;
    //         const nextMediaDOM = document.querySelector(`[data-id="${nextMediaId}"]`);
    //         nextMediaDOM.click();
    //     });
    // }
    // nextMedia();

    function closeLigthModal() {
        const lightBoxDiv = document.getElementById('lightbox');
        lightBoxDiv.addEventListener('click', (event) => {
            if (event.target.classList.contains('fa-xmark')) {
                lightBoxDiv.style.display = 'none';
            }
        });
    }

    closeLigthModal();

    return { lightBoxDOM, closeLigthModal };

}
