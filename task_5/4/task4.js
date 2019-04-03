const div_display = document.getElementsByClassName("display");
let id = 1;
const names = ["Geraldine", "Lance", "Georgetta", "Brigette", "Temeka", "Amelia", "Taneka", "Romana"];
const surnames = ["Verhey", "Grosse", "Morquecho", "Kamps", "Guilbault", "Collier", "Obermiller", "Allgood"];

function addCard() {
    let div_card = document.createElement("div");
    let img = document.createElement("img");
    let div_description = document.createElement("div");
    let p = document.createElement("p");
    const rName = Math.floor((Math.random() * 7) + 1);
    const rSurname = Math.floor((Math.random() * 7) + 1);

    div_card.classList.add("card");
    div_description.classList.add("description");

    img.src = `https://thispersondoesnotexist.com/image?${id}`;

    img.alt = "Avatar";
    p.innerHTML = `${names[rName]} ${surnames[rSurname]}`;
    id++;

    div_card.appendChild(img);
    div_card.appendChild(div_description);
    div_description.appendChild(p);

    div_card.addEventListener("click", function () {
        div_display[0].removeChild(div_card);

        setTimeout(function () {
            let newDiv = addCard();

            newDiv.addEventListener("click", function () {
                div_display[0].removeChild(newDiv);
            });

            div_display[0].appendChild(newDiv);
        }, 5000);
    });

    return div_card;
}

let timerId = setInterval(function () {
    let newDiv = addCard();

    div_display[0].appendChild(newDiv);
}, 2000);

setTimeout(function () {
    clearInterval(timerId);
}, 12000);
