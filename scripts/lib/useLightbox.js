export default function useLightbox() {
    let items = [];
    let currentIndex = 0;
    let eventController = new AbortController();

    function open(src) {
        eventController = new AbortController();
        currentIndex = items.findIndex(item => item.src === src);
        document.getElementById('lightbox').classList.add('lightbox--open');
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';

        createItem();

        window.addEventListener('keydown', (e) => {
            if (e.code === 'ArrowRight') next();
            if (e.code === 'ArrowLeft') previous();
            if (e.code === 'Escape') close();
        }, { signal: eventController.signal });
    }

    function close() {
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementById('lightbox').classList.remove('lightbox--open');
        eventController.abort();
    }

    function createItem() {
        // console.log(items[currentIndex])
        let html;

        if (isVideo(items[currentIndex].src)) {
            html = `<video class="photograph_media_movie lightbox" title="${items[currentIndex].title}" controls>
                        <source class="photograph_media_all" src="${items[currentIndex].src}" type="video/mp4">
                    </video>`;
        } else {
            html = `<div class="photograph_media_all">
                        <img src="${items[currentIndex].src}" alt="${items[currentIndex].title}">
                    </div>`;
        }

        document.getElementById('lightbox').innerHTML = `
            <div class="lightbox__container">
                <div class="lightbox__container__btn">
                    <i class="fa-solid fa-xmark" onclick="window.lightbox.close()" aria-label="fermer" tabindex="0"></i>
                </div>
            </div>  
            <div class="inlignflex">
                <i id="previous" onclick="window.lightbox.previous()" class="fa-solid fa-chevron-left" aria-label="précedent" tabindex="0"></i>
                ${html}
                <i id="next" onclick="window.lightbox.next()" class="fa-solid fa-chevron-right" aria-label="suivant" tabindex="0"></i>
            </div>
            <div class="photograph_media_infos" aria-label="informations du media">
                <div class="photograph_media_title" aria-label="titre">
                    <h3>${items[currentIndex].title}</h3>
                </div>
            </div>
        `;
    }

    function isVideo(src) {
        return src.includes('.mp4');
    }

    function next() {
        currentIndex = currentIndex + 1 > items.length - 1 ? 0 : currentIndex + 1;
        createItem();
    }

    function previous() {
        currentIndex = currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1;
        createItem();
    }

    function createDOM() {
        const lightbox = document.createElement('div');
        lightbox.setAttribute('id', 'lightbox');
        document.body.appendChild(lightbox);
    }

    function addEventListeners() {
        Array.from(document.getElementsByClassName('lightbox'))
            .forEach(item => {
                item.addEventListener('click', () => open(item.src));
                item.addEventListener('keydown', (e) => {
                    if(e.code === 'Enter') open(item.src)
                });

                items.push({
                    src: item.src,
                    title: isVideo(item.src) ? item.getAttribute('title') : item.alt,
                });
            });
    }

    function init() {
        createDOM();
        addEventListeners();
    }

    init();

    return { close, next, previous };
}
