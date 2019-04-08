const divMainArea = document.getElementsByClassName("main-area");
const words = ['КРИК', 'СОВА', 'РЫСЬ', 'СНЕГ', 'ЛЕТО', 'ЗИМА', 'ПЛЮС', 'ОЧКО', 'СТУЛ', 'СТОЛ'];
const rand = Math.floor((Math.random() * words.length));
const randWord = words[rand];
const input = document.querySelectorAll(".answer");
const button = document.getElementById('btn');

for (let i = 0; i < divMainArea[0].children.length; i++) {
    divMainArea[0].children[i].addEventListener("click", () => {
        divMainArea[0].children[i].classList.toggle("revealed");
    })
}

function generateWord() {
    let word = words[rand];
    for (let i = 0; i < divMainArea[0].children.length; i++) {
        divMainArea[0].children[i].innerHTML = word[i];
    }
}

generateWord();

function isFullOpen() {
    let count = 0;
    for (let i = 0; i < divMainArea[0].children.length; i++) {
        if (divMainArea[0].children[i].classList.contains("revealed")) {
            count++;
        }
    }
    if (count == 4) return true;
    else return false;
}

let timerId = setInterval(function () {
    if (isFullOpen()) {
        window.location.reload();
    }
}, 2000);


button.addEventListener("click", function check() {
    let inputValue = input[0].value.toUpperCase();
    if (inputValue == randWord) {
        clearInterval(timerId);
        for (let i = 0; i < divMainArea[0].children.length; i++) {
            divMainArea[0].children[i].classList.add("revealed");
        }
        alert('Вы угадали!');
        setInterval(function () {
            if (isFullOpen()) {
                window.location.reload();
            }
        }, 2000);
    }
    else if(input[0].value.length == 0)
        alert('Введите слово!');
    else
        alert('Неправильно!');
});

