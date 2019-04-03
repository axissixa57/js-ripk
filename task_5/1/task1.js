let header = document.createElement("header");
let main = document.createElement("main");
let aside = document.createElement("aside");
let section = document.createElement("section");
let div_header_d = document.createElement("div");
let div_display = document.createElement("div");
let div_card = document.createElement("div");
let img = document.createElement("img");
let div_description = document.createElement("div");
let p = document.createElement("p");

document.body.appendChild(header);
document.body.appendChild(main);
main.appendChild(aside); 
main.appendChild(section);
section.appendChild(div_header_d);
section.appendChild(div_display);
div_display.appendChild(div_card);
div_card.appendChild(img);
div_card.appendChild(div_description);
div_description.appendChild(p);

main.classList.add("content");
div_header_d.classList.add("header-d");
div_display.classList.add("display");
div_card.classList.add("card");
div_description.classList.add("description");

img.src = "https://thispersondoesnotexist.com/image";
img.alt = "Avatar";

div_header_d.innerHTML = "Выберите лицо, которое нравится вам больше остальных:";
p.innerHTML = "Персона номер 1";

