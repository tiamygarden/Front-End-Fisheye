export default function useLightbox() {
    let items = [];
    let currentIndex = 0;

    function open(src) {
        currentIndex = items.findIndex(item => item.src === src);
        document.getElementById('lightbox').classList.add('lightbox--open');
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';

        createItem();
    }

    function createItem() {
        console.log(items[currentIndex])
        let html = '';

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
                    <i class="fa-solid fa-xmark" onclick="window.lightbox.close()" aria-label="fermer"></i>
                </div>
            </div>  
            <div class="inlignflex">
                <i id="previous" onclick="window.lightbox.previous()" class="fa-solid fa-chevron-left"></i>
                ${html}
                <i id="next" onclick="window.lightbox.next()" class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="photograph_media_infos">
                <div class="photograph_media_title">
                    <h3>${items[currentIndex].title}</h3>
                </div>
            </div>
        `;
    }

    function isVideo(src) {
        return src.includes('.mp4');
    }


    function next() {
        currentIndex = currentIndex + 1 > items.length ? 0 : currentIndex + 1;
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

                items.push({
                    src: item.src,
                    title: isVideo(item.src) ? item.getAttribute('title') : item.alt,
                });
            });
    }


    function close() {
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementById('lightbox').classList.remove('lightbox--open');
    }

    function init() {
        createDOM();
        addEventListeners();
    }

    init();

    return { open, close, next, previous };
}
