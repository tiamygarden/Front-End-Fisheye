const modal = document.getElementById("contactModal");
const focusModal=document.querySelector('#contactModal');
const main=document.querySelector('#main');
const focusBody = document.querySelector("body");

function displayModal() {
    modal.style.display = "flex";
    focusBody.classList.add('no-scroll');
    focusModal.setAttribute("aria-modal", "true");
    main.setAttribute("aria-hidden", "true");
    modal.setAttribute('aria-hidden', 'false')
    disableTabindexForm();
    focusModal.focus();
}

function disableTabindexForm() {
    // disable tabindex for other divs outside form
    document.querySelector("header a").setAttribute("tabIndex", "-1"); //disable tabindex logo
    document.querySelector(".photograph-info").setAttribute("tabIndex", "-1"); //disable tabindex photogaph name header
    document.querySelector(".photograph-name").setAttribute("tabIndex", "-1");
    document.querySelector(".photograph-txt").setAttribute("tabIndex", "-1"); //disable tabindex photogaph city and tagline header
    document.querySelector(".photograph_column-center").setAttribute("tabIndex", "-1"); //disable tabindex contact button header
    document.querySelector(".photograph_column-right").setAttribute("tabIndex", "-1"); //disable tabindex image photographer header
    document.querySelector(".mediasOrderBy").setAttribute("tabIndex", "-1");
    document.querySelector("#photographMediasSection").setAttribute("tabIndex", "-1");
    document.querySelector("#likesModal").setAttribute("tabIndex", "-1");
    document.querySelector(".likes__modal__likes").setAttribute("tabIndex", "-1");
    document.querySelector(".likes__modal__price").setAttribute("tabIndex", "-1");
    document.querySelector("#totalLikes").setAttribute("tabIndex", "-1");
    document.querySelector("footer i").setAttribute("tabIndex", "-1");

    // const sorts = document.querySelectorAll(".sort");
    const imageSelected = document.querySelectorAll(".photograph_media_picture"); //select tabindex medias catalog
    const imageTxt = document.querySelectorAll(".photograph_media_title"); //select tabindex medias catalog title
    const imageLike = document.querySelectorAll(".photograph_media_likes"); //select tabindex medias catalog like number
    const imageLikeHeart = document.querySelectorAll(".heartIcon"); //select tabindex medias catalog like heart icon

    for (let i = 0; i < imageSelected.length; i++) {
        imageSelected[i].setAttribute("tabIndex", "-1"); //disable tabindex medias catalog
        imageTxt[i].setAttribute("tabIndex", "-1"); //disable tabindex medias catalog title
        imageLike[i].setAttribute("tabIndex", "-1"); //disable tabindex medias catalog like number
        imageLikeHeart[i].setAttribute("tabIndex", "-1"); //disable tabindex medias catalog like heart icon
    }

    //disable tabindex video catalog
    const videoCatalog = document.querySelectorAll(".photograph_media_movie");
    for (let i = 0; i < videoCatalog.length; i++) {
        videoCatalog[i].setAttribute("tabIndex", "-1");
    }
}
//TODO verifiez que le focus est bien sur le modal trois balises reste non impacté par tabindex -1

function closeModal() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "none";
    main.setAttribute("aria-hidden", "false");
    focusModal.focus();
    focusModal.setAttribute("aria-modal", "false");
    modal.setAttribute('aria-hidden', 'true')
    document.querySelector("body").classList.remove('no-scroll')
    enableTabindexForm();
}

function enableTabindexForm() {
    // enable tabindex for other divs outside form
    document.querySelector("header a").setAttribute("tabIndex", "0"); //enable tabindex logo
    document.querySelector(".photograph-info").setAttribute("tabIndex", "0"); //enable tabindex photogaph name header
    document.querySelector(".photograph-name").setAttribute("tabIndex", "0");
    document.querySelector(".photograph-txt").setAttribute("tabIndex", "0"); //enable tabindex photogaph city and tagline header
    document.querySelector(".photograph_column-center").setAttribute("tabIndex", "0"); //enable tabindex contact button header
    document.querySelector(".photograph_column-right").setAttribute("tabIndex", "0"); //enable tabindex image photographer header
    document.querySelector(".mediasOrderBy").setAttribute("tabIndex", "0");
    document.querySelector("#photographMediasSection").setAttribute("tabIndex", "0");
    document.querySelector("#likesModal").setAttribute("tabIndex", "0");
    document.querySelector(".likes__modal__likes").setAttribute("tabIndex", "0");
    document.querySelector(".likes__modal__price").setAttribute("tabIndex", "0");

    // const sorts = document.querySelectorAll(".sort");
    const imageSelected = document.querySelectorAll(".photograph_media_picture"); //select tabindex medias catalog
    const imageTxt = document.querySelectorAll(".photograph_media_title"); //select tabindex medias catalog title
    const imageLike = document.querySelectorAll(".photograph_media_likes"); //select tabindex medias catalog like number
    const imageLikeHeart = document.querySelectorAll(".heartIcon"); //select tabindex medias catalog like heart icon

    for (let i = 0; i < imageSelected.length; i++) {
        imageSelected[i].setAttribute("tabIndex", "0"); //enable tabindex medias catalog
        imageTxt[i].setAttribute("tabIndex", "0"); //enable tabindex medias catalog title
        imageLike[i].setAttribute("tabIndex", "0"); //enable tabindex medias catalog like number
        imageLikeHeart[i].setAttribute("tabIndex", "0"); //enable tabindex medias catalog like heart icon
    }

    //enable tabindex video catalog
    const videoCatalog = document.querySelectorAll(".photograph_media_movie");
    for (let i = 0; i < videoCatalog.length; i++) {
        videoCatalog[i].setAttribute("tabIndex", "0");
    }

}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

document.querySelector(".contact_button").addEventListener("click", function(event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let email = document.getElementById("email");
    let textMessage = document.getElementById("message");
    console.log("Prénom: " + firstName.value);
    console.log("Nom: " + lastName.value);
    console.log("Email: " + email.value);
    console.log("message: " + textMessage.value);
});
