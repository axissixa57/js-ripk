const divMainArea = document.getElementsByClassName("main-area");
const input = document.querySelectorAll(".answer");
const button = document.getElementById('btn');
const points = document.getElementById("points");
const numOfWords = document.getElementById("numOfWords");
points.innerHTML = 0;
numOfWords.innerHTML = 0;

for (let i = 0; i < divMainArea[0].children.length; i++) {
    divMainArea[0].children[i].addEventListener("click", () => {
        divMainArea[0].children[i].classList.toggle("revealed");
        points.innerHTML = (parseInt(points.innerHTML) - 5).toString();
    })
}

function generateWord() {
    const words = ['КРИК', 'СОВА', 'РЫСЬ', 'СНЕГ', 'ЛЕТО', 'ЗИМА', 'ПЛЮС', 'ОЧКО', 'СТУЛ', 'СТОЛ'];
    const rand = Math.floor((Math.random() * words.length));
    const word = words[rand];
    for (let i = 0; i < divMainArea[0].children.length; i++) {
        divMainArea[0].children[i].innerHTML = word[i];
    }
    return word;
}

let randWord = generateWord();

button.addEventListener("click", function check() {
    let inputValue = input[0].value.toUpperCase();
    if (inputValue == randWord) {
        clearInterval(timerId);
        
        for (let i = 0; i < divMainArea[0].children.length; i++) {
            divMainArea[0].children[i].classList.add("revealed");
        }

        points.innerHTML = (parseInt(points.innerHTML) + 20).toString();
        numOfWords.innerHTML = (parseInt(numOfWords.innerHTML) + 1).toString();

        setTimeout(function () {
            for (let i = 0; i < divMainArea[0].children.length; i++) {
                divMainArea[0].children[i].classList.remove("revealed");
            }
            randWord = generateWord();
        }, 3000);

        alert('Вы угадали!');

    } else if (input[0].value.length == 0) {
        alert('Введите слово!');
    } else alert('Неправильно!');
});

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
        for (let i = 0; i < divMainArea[0].children.length; i++) {
            divMainArea[0].children[i].classList.remove("revealed");
        }
        randWord = generateWord();
    }
}, 2000);
