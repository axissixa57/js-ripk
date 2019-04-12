const loader = document.getElementById('loader');
const page = document.getElementById('page');
const valueBox = document.querySelector(".value-box");
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