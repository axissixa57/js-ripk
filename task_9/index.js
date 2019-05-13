const divUP = document.querySelector('.up');
const cirlces = document.querySelectorAll('.circle');
const table = document.querySelector('.right-side table');
const curColor = document.getElementById('cur');
const prevColor = document.getElementById('prev');
const tds = document.querySelectorAll('table td');

// cursors
for (let i = 0; i < divUP.children.length; i++) {
    divUP.children[i].addEventListener('click', () => {
        if (divUP.children[i].textContent == "Paint bucket") {
            document.body.style.cursor = "url('./img/fill-drip-solid.png'), auto";
        }
        if (divUP.children[i].textContent == "Choose color") {
            document.body.style.cursor = "url('./img/eye-dropper-solid.png') 10 10, auto";
        }
        if (divUP.children[i].textContent == "Move") {
            document.body.style.cursor = "url('./img/arrows-alt-solid.png'), auto";
        }
        if (divUP.children[i].textContent == "Transform") {
            document.body.style.cursor = "url('./img/exchange-alt-solid.png'), auto";
        }
    })
}

document.addEventListener('contextmenu', () => {
    document.body.style.cursor = "default";
})

// change current color in the circle 
for (let i = 0; i < cirlces.length; i++) {
    cirlces[i].addEventListener('click', () => {
        if (document.body.style.cursor == 'url("./img/eye-dropper-solid.png") 10 10, auto') {
            let circle = getComputedStyle(cirlces[i]);
            let currentColor = getComputedStyle(curColor);

            let temp = currentColor.backgroundColor;
            curColor.style.backgroundColor = circle.backgroundColor;
            prevColor.style.backgroundColor = temp;

        }
    })
}

const divRigthSide = document.querySelector('.right-side');
const circle = document.querySelector('.right-side .circle');
const circleStyle = getComputedStyle(circle);

divRigthSide.addEventListener('mousedown', (e) => {
    // местонахождение круга в пределах divRigthSide, т.е. считывает координаты фигуры (круга) внутри блока divRigthSide, 
    // например размер фигуры 200х200, находится в верхнем левом углу, то её координаты буду (0,0) вне зависимости, где тыкнуть внутри блока divRigthSide
    let x = parseInt(circleStyle.left.slice(0, -2)); 
    let y = parseInt(circleStyle.top.slice(0, -2));

    // координаты блока divRigthSide - например левый верхний угол (0,0), правый нижний угол - (525, 815)
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;

    // размеры фигуры(круга) - 200х200
    const height = parseInt(circleStyle.height.slice(0, -2));
    const width = parseInt(circleStyle.width.slice(0, -2));

    function move(e) {
        e.preventDefault();
        // считываем координаты передвижения фигуры внутри блока
        // x += e.movementX;
        // y += e.movementY;
        
        // e.x and e.y - координаты фигуры относительно всего окна 
        console.log(e);

        // if (e.x < divRigthSide.offsetLeft + offsetX) {
        //     x = 0;
        // } else if (e.x > divRigthSide.offsetLeft + divRigthSide.clientWidth - width + offsetX) {
        //     x = divRigthSide.clientWidth - width;
        // }
        // if (e.y < divRigthSide.offsetTop + offsetY) {
        //     y = 0;
        // } else if (e.y > divRigthSide.offsetTop + divRigthSide.clientHeight - height + offsetY) {
        //     y = divRigthSide.clientHeight - height;
        // }

        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    }

    document.addEventListener('mousemove', move);

    document.addEventListener('mouseup', function up(e) {
        document.removeEventListener('mouseup', up);
        document.removeEventListener('mousemove', move);
    });
});

// for (const td of tds) {
//     td.setAttribute('draggable', true);
//     td.addEventListener('dragstart', drag);
//     td.addEventListener('dragover', allowDrop);
//     td.addEventListener('drop', drop);
// }

// const cols = document.querySelectorAll('#columns .column');
// [].forEach.call(cols, function (col) {
//     col.addEventListener('dragstart', handleDragStart, false);
//     col.addEventListener('dragenter', handleDragEnter, false)
//     col.addEventListener('dragover', handleDragOver, false);
//     col.addEventListener('dragleave', handleDragLeave, false);
//     col.addEventListener('drop', handleDrop, false);
//     col.addEventListener('dragend', handleDragEnd, false);
// });


