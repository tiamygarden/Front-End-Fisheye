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
                                <div class="lightbox__container__btn">
                                    <i class="fa-solid fa-xmark"  onclick="closeLigthModal()" aria-label="fermer"></i>
                                </div>
                                <div class="inlignflex">
                                <i id="previous" class="fa-solid fa-chevron-left"></i>
                                <video class="photograph_media_movie" aria-label="${alt}" controls>
                                    <source class="photograph_media_all" src="${videoUrl}" type="video/mp4">
                                </video>       
                                    <i  id="next" class="fa-solid fa-chevron-right"></i>
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
                                <i id="previous" class="fa-solid fa-chevron-left"></i>
                                <div class="photograph_media_picture">
                                    <div class="photograph_media_all">
                                        <img src="${picture}" alt="${alt}"/>
                                    </div>
                                </div>
                                <i id="next" class="fa-solid fa-chevron-right"></i>
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

    function closeLigthModal() {
        const lightBoxDiv = document.getElementById('lightbox');
        lightBoxDiv.addEventListener('click', (event) => {
            if (event.target.classList.contains('fa-xmark')) {
                lightBoxDiv.style.display = 'none';
            }
        });
    }

    // function openLightBox() {
    //     const mediaSelector = document.querySelectorAll('.photograph_media_picture');
    //     mediaSelector.forEach((media) => {
    //         media.addEventListener('click', (event) => {
    //             const title = event.target.getAttribute('alt');
    //             const currentMedia = medias.find((media) => media.title === title);
    //             const LightBoxFactory = lightBoxFactory(currentMedia);
    //             const lightBoxDom = LightBoxFactory.lightBoxDOM();
    //             const lightBoxDiv = document.getElementById('lightbox');
    //             lightBoxDiv.innerHTML= '';
    //             lightBoxDiv.style.display = 'flex';
    //             lightBoxDiv.appendChild(lightBoxDom);
    //         });
    //     });
    // }

    closeLigthModal();

    return { lightBoxDOM, closeLigthModal };

}
