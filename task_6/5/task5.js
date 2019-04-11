const divMainArea = document.getElementsByClassName("main-area");
const input = document.querySelectorAll(".answer");
const button = document.getElementById('btn');
const points = document.getElementById("points");
const numOfWords = document.getElementById("numOfWords");
let td = document.getElementsByTagName('td');

input[0].value.toUpperCase();
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


for (let i = 0; i < td.length; i++) {
    td[i].addEventListener('click', () => {
        if (randWord.search(td[i].innerHTML) != -1) {
            td[i].classList.add("green");
            for (let k = 0; k < randWord.length; k++) {
                if (randWord[k] == td[i].innerHTML) {
                    divMainArea[0].children[k].classList.add("revealed");
                }
            }
        } else {
            td[i].classList.add("red");
            mistakes++;
        }
    });
}

button.addEventListener("click", function () {
    if(input[0].value == randWord) {
        alert(`Вы угадали! Количество неправильных букв = ${mistakes}`);
        mistakes = 0;
    }

    if (isFullOpen()) {
        points.innerHTML = (parseInt(points.innerHTML) + 70).toString();
        numOfWords.innerHTML = (parseInt(numOfWords.innerHTML) + 1).toString();

        setTimeout(function () {
            for (let i = 0; i < divMainArea[0].children.length; i++) {
                divMainArea[0].children[i].classList.remove("revealed");
            }

            for (let j = 0; j < td.length; j++) {
                if (td[j].classList.contains("red")) {
                    td[j].classList.remove("red");
                } else if (td[j].classList.contains("green")) {
                    td[j].classList.remove("green");
                }
            }

            randWord = generateWord();
        }, 3000);
    }

    //input[0].value = "";
});


// for (let i = 0; i < td.length; i++) {
//     td[i].addEventListener('click', () => {

//         for (let j = 0; j < divMainArea[0].children.length; j++) {
//             if (td[i].innerHTML == divMainArea[0].children[j].innerHTML) {
//                 td[i].classList.add("green");
//                 for (let k = 0; k < randWord.length; k++) {
//                     if (randWord[k] == td[i].innerHTML) {
//                         divMainArea[0].children[k].classList.add("revealed");
//                     }
//                 }
//             } else {
//                 td[i].classList.add("red");
//             }
//         }
//     });
// }

// if (isFullOpen()) {
//     points.innerHTML = (parseInt(points.innerHTML) + 70).toString();
//     numOfWords.innerHTML = (parseInt(numOfWords.innerHTML) + 1).toString();

//     setTimeout(function () {
//         for (let i = 0; i < divMainArea[0].children.length; i++) {
//             divMainArea[0].children[i].classList.remove("revealed");
//         }
//         for (let j = 0; j < td.length; j++) {
//             if (td[j].classList.contains("green")) {
//                 td[j].classList.remove("green");
//             } else if (td[j].classList.contains("red")) {
//                 td[j].classList.remove("red");
//             }
//         }

//         randWord = generateWord();
//     }, 3000);

//     alert(`Вы угадали! Количество неправильных букв = ${mistakes}`);
//     mistakes = 0;
// }

// if (randWord.search(inputValue) == -1) {
//     mistakes++;
//     alert(`Такой буквы здесь нет! Ошибок: ${mistakes}`);
// }











