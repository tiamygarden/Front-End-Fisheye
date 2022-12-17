//Pour chaque fa heart, on ajoute un ecoute d'evenement click pour ajouter ou suprimer un like
function AddClickHeart() {
    const totalLikesText = document.querySelector("#heartCount");
    const clickLikes = document.querySelectorAll("#heartIcon");

    // click for all hearts images
    for (const clickHeart of clickLikes) {
        clickHeart.addEventListener("click", () => {
            let siblingClick = clickHeart.previousElementSibling;
console.log("siblingClick", siblingClick);
            siblingClick.innerHTML = parseInt(siblingClick.innerHTML) + 1;
            totalLikesText.innerHTML = parseInt(totalLikesText.innerHTML) + 1;
        });
    }
    for (const clickHeart of clickLikes) {
        clickHeart.addEventListener("keydown", (e) => {
            if (e.code === "Enter") {
                let siblingClick = clickHeart.previousElementSibling;

                siblingClick.innerHTML = parseInt(siblingClick.innerHTML) + 1;
                totalLikesText.innerHTML = parseInt(totalLikesText.innerHTML) + 1;
            }
        });
    }
}

