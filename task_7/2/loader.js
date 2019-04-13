// const loader = document.getElementById('loader');
// const page = document.getElementById('page');
// const valueBox = document.querySelector(".value-box");
// let progress = 0;

// let timerId = setInterval(function () {
//     if (progress > 100) {
//         clearInterval(timerId);
//         loader.style.display = "none";
//         page.style.display = "flex";
//     }
//     progress += 5;
//     valueBox.style.width = `${progress}%`;
// }, 75);

const sectionFrame1 = document.getElementById('frame_1');
const sectionFrame2 = document.getElementById('frame_2');
const buttonRegistry = document.querySelector('#frame_1 > button');
//console.log(sectionFrame1);
buttonRegistry.addEventListener('click', () => {
    sectionFrame1.style.display = "none";
    sectionFrame2.style.display = "flex";
});