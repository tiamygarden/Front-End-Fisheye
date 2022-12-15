import { photographerPageMediaFactory } from './photographerPageMediaFactory.js';

export function mediasFactory(medias) {
    window.addEventListener("sortEvent", (event) => {
        displayList(event.detail);
        // console.log('detail', event.detail);
    });

    function displayOrderBy() {
        const article = document.createElement("div");
        article.classList.add("custom-select");
        // article.setAttribute("id" , "custom-select");
        article.style.width = "200px";
        article.innerHTML = `
                          <select onchange="window.dispatchEvent(new CustomEvent('sortEvent',{detail:value}))">
                                <option value=" ">Popularité</option>
                                <option value="popularite">Popularité</option>
                                <option value="date">Date</option>
                                <option value="title">Titre</option>
                              </select>
                        `;

        document.getElementById("mediasOrderBy").appendChild(article);
    }

    displayOrderBy();
    displayList();

    function displayList(sortType = null) {
        const photographerMediasSection = document.querySelector("#photograph_medias_section");
        photographerMediasSection.innerHTML = "";

        sortMedias(sortType).forEach((media) => {
            const photographerPageMediaModel = photographerPageMediaFactory(media);
            const MediasDOM = photographerPageMediaModel.PhotographerMediasDOM();
            photographerMediasSection.appendChild(MediasDOM);
        });
    }

    function sortMedias(sortType) {
        // console.log(sortType);
        switch (sortType) {
            case "popularity":
                return medias.sort((a, b) => b.likes - a.likes);
            case "date":
                return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
            case "title":
                return medias.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return medias;
        }
    }

/* Look for any elements with the class "custom-select": */
    let x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;

    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        console.log("a", a);
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        console.log("b", b);
        for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            console.log("c", c);
            // when I click on div select selected toggle select-hide
            c.addEventListener("click", function () {
                // e.stopPropagation();
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                let y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                console.log("s", s);
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML === this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class","select-hide");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            }
            );
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        let x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt === y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
}
