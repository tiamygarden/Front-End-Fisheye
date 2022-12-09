export function mediaFilterFactory() {
    const article = document.createElement('div');
    article.classList.add('media_filter');
    article.innerHTML = `
                            <label for="select_images" id="sort" tabindex="0">Trier par</label>
                            <select id="select_images" data-trigger="select" tabindex="0" >
                              <option value="popularity">Popularité</option>
                              <option value="date">Date</option>
                              <option value="title">Titre</option>
                            </select>
                            <i class="fas fa-chevron-down arrow-down"></i>
                            `;
    return (article);
}
