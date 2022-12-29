export function useLikes() {
    const heartIconButtons = document.querySelectorAll('.heartIcon');
    let currentLikes = 0;

    function addLike(heartIconButton, counterElement) {
        currentLikes = parseInt(counterElement.textContent);
        currentLikes = currentLikes + 1;
        counterElement.innerHTML = currentLikes;
        heartIconButton.classList.add('heartIcon--liked');
        updateLikes();
    }

    //function to remove the addlike and change the title to default
    function disLike(heartIconButton, counterElement) {
        currentLikes = parseInt(counterElement.textContent);
        currentLikes = currentLikes - 1;
        counterElement.innerHTML = currentLikes;
        heartIconButton.classList.remove('heartIcon--liked');
        updateLikes();
    }

    function updateLikes(counterElement) {
        currentLikes = parseInt(counterElement.textContent);
        window.dispatchEvent(new CustomEvent('counterChanged', { detail: currentLikes }));
        // totalLikesForRecap += currentLikes;
    }

    //function to toggle the like
    function toggleLike(heartIconButton, counterElement) {
        if (heartIconButton.classList.contains('heartIcon--liked')) {
            disLike(heartIconButton, counterElement);
        } else {
            addLike(heartIconButton, counterElement);
        }
        currentLikes = parseInt(counterElement.textContent);
    }

    function addEventListeners() {
        heartIconButtons.forEach((heartIconButton) => {
            heartIconButton.addEventListener('click', () => {
                // Find the counter element that is associated with the clicked heart icon
                const counterElement = heartIconButton.parentElement.querySelector('.likesCount');
                toggleLike(heartIconButton, counterElement);
            });
        });
    }

    function init() {
        addEventListeners();
        toggleLike();
        updateLikes();
    }

    init();

    // return { toggleLike, updateLikes};
}
