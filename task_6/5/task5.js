const divMainArea = document.getElementsByClassName("main-area");
const input = document.querySelectorAll(".answer");
const button = document.getElementById('btn');
const points = document.getElementById("points");
const numOfWords = document.getElementById("numOfWords");
points.innerHTML = 0;
numOfWords.innerHTML = 0;

function generateWord() {
    const words = ["АФЕРИСТ", "ИЛЛЮЗИЯ", "КОМНАТА", "СТОЛБЕЦ", "ФИЛОСОФ", "ФАНАТИК", "ХИТРЮГА", "ЧАРОДЕЙ", "ЭКВАТОР", "ЮМОРИСТ", "КОЛОКОЛ", "КОЛОКОЛ", "БАБУШКА", "ЗАВАРКА"];
    const rand = Math.floor((Math.random() * words.length));
    const word = words[rand];
    for (let i = 0; i < divMainArea[0].children.length; i++) {
        divMainArea[0].children[i].innerHTML = word[i];
    }
    return word;
}

function isFullOpen() {
    let count = 0;
    for (let i = 0; i < divMainArea[0].children.length; i++) {
        if (divMainArea[0].children[i].classList.contains("revealed")) {
            count++;
        }
    }
    if (count == divMainArea[0].children.length) return true;
    else return false;
}

let randWord = generateWord(); 
let mistakes = 0;
console.log(randWord);

button.addEventListener("click", function() {
    let inputValue = input[0].value.toUpperCase();

    for (let i = 0; i < randWord.length; i++) {
        if (randWord[i] == inputValue) {
            divMainArea[0].children[i].classList.add("revealed");
        }
    }

    if(randWord.search(inputValue) == -1) {
        mistakes++;
        alert(`Такой буквы здесь нет! Ошибок: ${mistakes}`);
    }
    
    if(isFullOpen()) {
        points.innerHTML = (parseInt(points.innerHTML) + 70).toString();
        numOfWords.innerHTML = (parseInt(numOfWords.innerHTML) + 1).toString();

        setTimeout(function () {
            for (let i = 0; i < divMainArea[0].children.length; i++) {
                divMainArea[0].children[i].classList.remove("revealed");
            }
            randWord = generateWord();
        }, 3000);

        alert(`Вы угадали! Количество неправильных букв = ${mistakes}`);
        mistakes = 0;
    }

    if(input[0].value.length == 0) {
        alert('Введите букву!');
    }

    input[0].value = "";
});



