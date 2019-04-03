const names = ["Geraldine", "Lance", "Georgetta", "Brigette", "Temeka", "Amelia", "Taneka", "Romana"];
const surnames = ["Verhey", "Grosse", "Morquecho", "Kamps", "Guilbault", "Collier", "Obermiller", "Allgood"];

const rName = Math.floor((Math.random() * 7) + 1);
const rSurname = Math.floor((Math.random() * 7) + 1);
const rId = Math.floor((Math.random() * 100) + 1);

let leftSide = document.getElementsByClassName("left-side");
let rightSide = document.getElementsByClassName("right-side");

let dislike = document.getElementById("dislike");
let like = document.getElementById("like");
let person = document.getElementById("person");

// let id = 1;
// let img = document.getElementsByTagName("img");
//img.src = `https://thispersondoesnotexist.com/image?${id}`;
// img[0].src = `https://thispersondoesnotexist.com/image?${rId}`;

person.innerHTML = `${names[rName]} ${surnames[rSurname]}`;

leftSide[0].addEventListener("click", function () {
    dislike.innerHTML++;
});

rightSide[0].addEventListener("click", function () {
    like.innerHTML++;
});