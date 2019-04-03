const names = ["Geraldine", "Lance", "Georgetta", "Brigette", "Temeka", "Amelia", "Taneka", "Romana"];
const surnames = ["Verhey", "Grosse", "Morquecho", "Kamps", "Guilbault", "Collier", "Obermiller", "Allgood"];

let leftSide = document.getElementsByClassName("left-side");
let rightSide = document.getElementsByClassName("right-side");

let dislike = document.getElementById("dislike");
let like = document.getElementById("like");
let person = document.getElementById("person");

let id = 1;
let img = document.getElementsByTagName("img");

let timerId = setInterval(function () {

    let obj = {
        countOfDislikes: 0,
        countOfLikes: 0
    }

    const rName = Math.floor((Math.random() * 7) + 1);
    const rSurname = Math.floor((Math.random() * 7) + 1);
    person.innerHTML = `${names[rName]} ${surnames[rSurname]}`;
    img[0].src = `https://thispersondoesnotexist.com/image?${id++}`;

    if(localStorage.getItem(localStorage.key(id))) {
        let objOfRaiting = JSON.parse(localStorage.getItem(`${id}`));
        like.innerHTML = objOfRaiting.countOfLikes;
        dislike.innerHTML = objOfRaiting.countOfDislikes;
    }

    leftSide[0].addEventListener("click", function () {
        dislike.innerHTML = obj.countOfDislikes++;
        localStorage.setItem(`${id}`, JSON.stringify(obj));
    });

    rightSide[0].addEventListener("click", function () {
        like.innerHTML = obj.countOfLikes++;
        localStorage.setItem(`${id}`, JSON.stringify(obj));
    });

    console.log(localStorage.getItem(`7`));

}, 2000);