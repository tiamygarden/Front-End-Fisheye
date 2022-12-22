export default function useLikes() {
    let items = [];
    let currentLikes =  0;

    function addLike() {
        currentLikes = items.findlikes(item => item.numberOflikes === numberOflikes);
        currentLikes = currentLikes + 1;
        items.push(1);
        console.log(items);

        createLikeItem();
    }

    function removeLike() {
        currentLikes = currentLikes - 1;
        items.pop();
        console.log(items);

        createLikeItem();
    }

    function toggleLike() {
        if (items.length === 0) {
            addLike();
        } else {
            removeLike();
        }
    }

    function createLikeItem() {
        let html;

       html=`<div class="photograph_media_likes">
                    ${items[currentLikes].likes}
                    <i id="heartIcon" onclick="toggleLike()" class="fa-solid fa-heart"></i>
                    
                </div>`;

        document.querySelector('.photograph_media_likes').innerHTML = html;

    }

    function AccessToDOM() {
        document.querySelector(".photograph_media_likes");
        // document.body.appendChild(createLikesDOM());
    }

    function addEventListeners() {
        Array.from(document.querySelectorAll('.photograph_media_likes'))
            .forEach(currentLikes => {
                currentLikes.addEventListener('click', () => toggleLike());
            });
    }

    function init() {
        AccessToDOM();
        addEventListeners();
    }

    init();

    return { toggleLike };
}
