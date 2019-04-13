const loader = document.getElementById('loader');
const page = document.getElementById('page');
const valueBox = document.querySelector(".value-box");
const sectionFrame1 = document.getElementById('frame_1');
const sectionFrame2 = document.getElementById('frame_2');
const sectionFrame3 = document.getElementById('frame_3');
const buttonRegistry = document.querySelector('#frame_1 > button');
const buttonNext = document.getElementById('next');
const form = document.querySelector('form');
const inputs = document.getElementsByTagName('input');
const pass = document.getElementById('pass');
const repeatPass = document.getElementById('repeat_pass');
let progress = 0;

let timerId = setInterval(function () {
    if (progress > 100) {
        clearInterval(timerId);
        loader.style.display = "none";
        page.style.display = "flex";
    }
    progress += 5;
    valueBox.style.width = `${progress}%`;
}, 75);

buttonRegistry.addEventListener('click', () => {
    sectionFrame1.style.display = "none";
    sectionFrame2.style.display = "flex";
});

buttonNext.addEventListener('click', () => {
    sectionFrame2.style.display = "none";
    sectionFrame3.style.display = "flex";
});

function inputsHasValues() {
    let check = true;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            check = false;
            break;
        }
    }
    return check;
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', () => {
        if(inputsHasValues()) {
            if(pass.value == repeatPass.value) {
                buttonNext.removeAttribute('disabled');
            }
        } 
    });
}
