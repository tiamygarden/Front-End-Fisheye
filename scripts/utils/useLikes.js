export function useLikes() {
    const numberOfLike = document.getElementById('likesCount');
    let heartIconButton = document.getElementById('heartIcon');
    let currentLikes = parseInt(numberOfLike.innerHTML);

    function addLike() {
        currentLikes= currentLikes+1;
        heartIconButton.setAttribute('title', 'J aime déjà');
        updateLikes();
    }

    //function to remove the addlike and change the title to default
    function disLike() {
        currentLikes=currentLikes-1;
        heartIconButton.setAttribute('title', 'Je n aime plus');
        updateLikes();
    }

    function updateLikes() {
        numberOfLike.innerHTML = currentLikes;
    }

    //function to toggle the like
    function toggleLike() {
        let title = heartIconButton.getAttribute('title');
        if (title === 'J aime déjà') {
            disLike();
        } else {
            addLike();
        }
        numberOfLike.innerHTML = currentLikes;
    }

    function addEventListeners() {
        heartIconButton.addEventListener('click', () => toggleLike());
    }

    function init() {
        addEventListeners();
    }

    init();

    return { toggleLike };
}
