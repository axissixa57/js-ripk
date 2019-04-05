const divMainArea = document.getElementsByClassName("main-area");
const words = ['КРИК', 'СОВА', 'РЫСЬ', 'СНЕГ', 'ЛЕТО', 'ЗИМА', 'ПЛЮС', 'ОЧКО', 'СТУЛ', 'СТОЛ'];
let rand = Math.floor((Math.random() * words.length));

for (let i = 0; i < divMainArea[0].children.length; i++) {
    divMainArea[0].children[i].addEventListener("click", () => {
        divMainArea[0].children[i].classList.toggle("revealed");
    })
}

function isFullOpen() {
    let count = 0;
    for (let i = 0; i < divMainArea[0].children.length; i++) {
        if (divMainArea[0].children[i].classList.contains("revealed")) {
            count++;
        }
    }
    if(count == 4) return true;
    else return false;
}

function generateWord() {
    let word = words[rand];
    for (let i = 0; i < divMainArea[0].children.length; i++) {
        divMainArea[0].children[i].innerHTML = word[i];
    }
}
generateWord();

let timerId = setInterval(function () {  
    if(isFullOpen()) {
        //clearInterval(timerId);
        window.location.reload();
    }    
}, 2000);
