export function totalLikesFactory(data) {
    const { likes, price } = data;

    //list media selon id
    function totalLikesDOM() {
        const cardTotalLikes = document.createElement('div');
        cardTotalLikes.classList.add('likes__modal');
        cardTotalLikes.innerHTML  = `
                            <div class="likes__modal__likes">
                                <p class="likes__modal__likes" >${likes}</p>
                                <i class="fas fa-heart" aria-label="likes"></i>
                            </div>
                            <div class="likes__modal__price">
                                <p>${price}&euro; / jour</p>
                            </div>
                            `;
        return cardTotalLikes;
    }

    return { totalLikesDOM };
}

