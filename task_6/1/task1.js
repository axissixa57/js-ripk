const divMainArea = document.getElementsByClassName("main-area");

for (let i = 0; i < divMainArea[0].children.length; i++) {
    divMainArea[0].children[i].addEventListener("click", () => {
        divMainArea[0].children[i].classList.toggle("revealed");
    })
}