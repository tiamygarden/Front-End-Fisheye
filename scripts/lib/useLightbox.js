export default function useLightbox() {
    let items = [];
    let currentIndex = 0;

    //todo ajouter listener event prev next

    function open(src) {
        currentIndex = items.findIndex(item => item.src === src);
        document.getElementById('lightbox').classList.add('lightbox--open');
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';

        createItem();
    }

    function createItem() {
        document.getElementById('lightbox').innerHTML = `
            <div class="lightbox__container">
                <div class="lightbox__container__btn">
                    <i class="fa-solid fa-xmark"  onclick="close()" aria-label="fermer"></i>
                </div>
            </div>  
            <div class="inlignflex">
                <i id="previous" onclick="previous()" class="fa-solid fa-chevron-left"></i>
                <div class="photograph_media_all">
                    <img src="${items[currentIndex].src}" alt="${items[currentIndex].title}">
                </div>
                <i id="next" onclick="next()" class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="photograph_media_infos">
                <div class="photograph_media_title">
                    <h3>${items[currentIndex].title}</h3>
                </div>
            </div>
        `;
    }

    function close() {
        // document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementById('lightbox').classList.remove('lightbox--open');
    }

    function next() {
        currentIndex = currentIndex + 1 > items.length ? 0 : currentIndex + 1;
        createItem();

    }

    function previous() {

    }

    function createDOM() {
        const lightbox = document.createElement('div');
        lightbox.setAttribute('id', 'lightbox');
        document.body.appendChild(lightbox);
    }

    function addEventListeners() {
        // todo ajouter les event listeners
        Array.from(document.getElementsByClassName('lightbox'))
            .forEach(item => {
                item.addEventListener('click', () => open(item.src));

                items.push({
                    src: item.src,
                    title: item.alt,
                });
            });
        console.log(items);
    }

    function init() {
        createDOM();
        addEventListeners();
    }

    init();
}
