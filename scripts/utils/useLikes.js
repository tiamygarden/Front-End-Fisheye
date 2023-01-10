export function useLikes() {
    function add(element) {
        const e = element.getElementsByClassName('likesCount')[0];
        e.innerHTML = (parseInt(e.innerHTML) + 1).toString();
        element.getElementsByClassName('fa-heart')[0].classList.add('--liked');
        document.getElementById('totalLikes').innerHTML = (parseInt(document.getElementById('totalLikes').innerHTML) + 1).toString();
    }

    function substract(element) {
        const e = element.getElementsByClassName('likesCount')[0];
        e.innerHTML = (parseInt(e.innerHTML) - 1).toString();
        element.getElementsByClassName('fa-heart')[0].classList.remove('--liked');
        document.getElementById('totalLikes').innerHTML = (parseInt(document.getElementById('totalLikes').innerHTML) - 1).toString();
    }

    function toggle(element) {
        element.getElementsByClassName('fa-heart')[0].classList.contains('--liked')
            ? substract(element)
            : add(element);
    }

    document.querySelectorAll('.photograph_media_likes').forEach((element) => {
        element.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                toggle(element);
            }
        });
    });

    return { toggle };
}
