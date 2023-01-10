const modal = document.getElementById('contactModal');
const focusModal = document.querySelector('#contactModal');
const main = document.querySelector('#main');
const focusBody = document.querySelector('body');
const closeBtn = document.querySelector('.modal header img');

// const firstInput=document.querySelector("#first-name");

function displayModal() {
    modal.style.display = 'flex';
    focusBody.classList.add('no-scroll');
    focusModal.setAttribute('aria-modal', 'true');
    main.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    disableTabindexForm();
    focusModal.focus();
    closeBtn.focus();
}

function disableTabindexForm() {
    // disable tabindex for other divs outside form
    document.querySelector('header a').setAttribute('tabindex', '-1'); //disable tabindex logo
    document.querySelector('.photograph-info').setAttribute('tabindex', '-1'); //disable tabindex photogaph info header
    document.querySelector('.photograph-name').setAttribute('tabindex', '-1'); //disable tabindex photogaph name header
    document.querySelector('.photograph-txt').setAttribute('tabindex', '-1'); //disable tabindex photogaph city and tagline header
    document.querySelector('.photograph_column-center button').setAttribute('tabindex', '-1'); //disable tabindex contact button header
    document.querySelector('.photograph_column-right').setAttribute('tabindex', '-1'); //disable tabindex image photographer header
    document.querySelector('.mediasOrderBy').setAttribute('tabindex', '-1'); //disable tabindex medias order by
    document.querySelector('#photographMediasSection').setAttribute('tabindex', '-1'); //disable tabindex medias catalog
    document.querySelector('#likesModal').setAttribute('tabindex', '-1'); //disable tabindex likes modal
    document.querySelector('.likes__modal__likes').setAttribute('tabindex', '-1'); //disable tabindex likes modal likes
    document.querySelector('.likes__modal__price').setAttribute('tabindex', '-1'); //disable tabindex likes modal price
    document.querySelector('#totalLikes').setAttribute('tabindex', '-1'); //disable tabindex likes modal total likes
    document.querySelector('footer i').setAttribute('tabindex', '-1'); //disable tabindex footer icon

    // const sorts = document.querySelectorAll(".sort");
    const imageSelected = document.getElementsByClassName('lightbox'); //select tabindex medias catalog
    const imageTxt = document.getElementsByClassName('photograph_media_title'); //select tabindex medias catalog title
    const imageLike = document.getElementsByClassName('photograph_media_likes'); //select tabindex medias catalog like number
    const imageLikeHeart = document.getElementsByClassName('heartIcon'); //select tabindex medias catalog like heart icon

    for (let i = 0; i < imageSelected.length; i++) {
        imageSelected[i].setAttribute('tabindex', '-1'); //disable tabindex medias catalog
        imageTxt[i].setAttribute('tabindex', '-1'); //disable tabindex medias catalog title
        imageLike[i].setAttribute('tabindex', '-1'); //disable tabindex medias catalog like number
        imageLikeHeart[i].setAttribute('tabindex', '-1'); //disable tabindex medias catalog like heart icon
    }

    //disable tabindex video catalog
    const videoCatalog = document.querySelectorAll('video .photograph_media_video');
    for (let i = 0; i < videoCatalog.length; i++) {
        videoCatalog[i].setAttribute('tabindex', '-1');
    }
}

function closeModal() {
    if (modal.style.display === 'flex') {
        const modal = document.getElementById('contactModal');
        modal.style.display = 'none';
        main.setAttribute('aria-hidden', 'false');
        focusModal.focus();
        focusModal.setAttribute('aria-modal', 'false');
        modal.setAttribute('aria-hidden', 'true');
        document.querySelector('body').classList.remove('no-scroll');
        enableTabindexForm();
    }
}

function enableTabindexForm() {
    // enable tabindex for other divs outside form
    document.querySelector('header a').setAttribute('tabindex', '0'); //enable tabindex logo
    document.querySelector('.photograph-info').setAttribute('tabindex', '0'); //enable tabindex photogaph info header
    document.querySelector('.photograph-name').setAttribute('tabindex', '0'); //enable tabindex photogaph name header
    document.querySelector('.photograph-txt').setAttribute('tabindex', '0'); //enable tabindex photogaph city and tagline header
    document.querySelector('.photograph_column-center button').setAttribute('tabindex', '0'); //enable tabindex contact button header
    document.querySelector('.photograph_column-right').setAttribute('tabindex', '0'); //enable tabindex image photographer header
    document.querySelector('.mediasOrderBy').setAttribute('tabindex', '0'); //enable tabindex medias order by
    document.querySelector('#photographMediasSection').setAttribute('tabindex', '0'); //enable tabindex medias catalog
    document.querySelector('#likesModal').setAttribute('tabindex', '0'); //enable tabindex likes modal
    document.querySelector('.likes__modal__likes').setAttribute('tabindex', '0'); //enable tabindex likes modal likes
    document.querySelector('.likes__modal__price').setAttribute('tabindex', '0'); //enable tabindex likes modal price
    document.querySelector('#totalLikes').setAttribute('tabindex', '0'); //enable tabindex likes modal total likes
    document.querySelector('footer i').setAttribute('tabindex', '0'); //enable tabindex footer icon

    // const sorts = document.querySelectorAll(".sort");
    const imageSelected = document.getElementsByClassName('lightbox'); //select tabindex medias catalog
    const imageTxt = document.getElementsByClassName('photograph_media_title'); //select tabindex medias catalog title
    const imageLike = document.getElementsByClassName('photograph_media_likes'); //select tabindex medias catalog like number
    const imageLikeHeart = document.getElementsByClassName('heartIcon'); //select tabindex medias catalog like heart icon

    for (let i = 0; i < imageSelected.length; i++) {
        imageSelected[i].setAttribute('tabindex', '0'); //enable tabindex medias catalog
        imageTxt[i].setAttribute('tabindex', '0'); //enable tabindex medias catalog title
        imageLike[i].setAttribute('tabindex', '0'); //enable tabindex medias catalog like number
        imageLikeHeart[i].setAttribute('tabindex', '0'); //enable tabindex medias catalog like heart icon
    }

    //enable tabindex video catalog
    const videoCatalog = document.querySelectorAll('video .photograph_media_video');
    for (let i = 0; i < videoCatalog.length; i++) {
        videoCatalog[i].setAttribute('tabindex', '0');
    }
}

closeBtn.addEventListener('keydown', function (event) {
    if (modal.style.display === 'flex') {
        if (event.key === 'Enter') {
            closeModal();
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (modal.style.display === 'flex') {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
});

document.querySelector('.contact_button').addEventListener('click', function (event) {
    event.preventDefault();
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let email = document.getElementById('email');
    let textMessage = document.getElementById('message');
    console.log('Prénom: ' + firstName.value);
    console.log('Nom: ' + lastName.value);
    console.log('Email: ' + email.value);
    console.log('message: ' + textMessage.value);
});
