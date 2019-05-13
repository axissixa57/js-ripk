const divUP = document.querySelector('.up');
const divRigthSide = document.querySelector('.right-side');
const color = ['#FFFFFF', '#80D8FF', '#FFFF8D', '#FF8A80', '#CCFF90', '#CFD8DC', '#FFD180'];

for (let i = 0; i < divUP.children.length; i++) {
    divUP.children[i].addEventListener('click', () => {
        if (divUP.children[i].textContent == "Circle") {
            const randColor = Math.floor((Math.random() * 7));
            const randTop = Math.floor((Math.random() * 420));
            const randleft = Math.floor((Math.random() * 780));
            const newCircle = document.createElement('div');
            newCircle.classList.add('circle');
            newCircle.style.top = `${randTop}px`;
            newCircle.style.left = `${randleft}px`;
            newCircle.style.backgroundColor = color[randColor];
            divRigthSide.appendChild(newCircle);

            const circle = document.querySelector('.right-side .circle');
            const circleStyle = getComputedStyle(circle);

            circle.addEventListener('mousedown', (e) => {
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

                function mouseMove(e) {
                    e.preventDefault();

                    // считываем координаты передвижения фигуры внутри блока
                    x += e.movementX;
                    y += e.movementY;

                    // e.x and e.y - координаты фигуры относительно всего окна 
                    if (e.x < divRigthSide.offsetLeft + offsetX) {
                        x = 0;
                    } else if (e.x > divRigthSide.offsetLeft + divRigthSide.clientWidth - width + offsetX) {
                        x = divRigthSide.clientWidth - width;
                    }
                    if (e.y < divRigthSide.offsetTop + offsetY) {
                        y = 0;
                    } else if (e.y > divRigthSide.offsetTop + divRigthSide.clientHeight - height + offsetY) {
                        y = divRigthSide.clientHeight - height;
                    }

                    circle.style.left = `${x}px`;
                    circle.style.top = `${y}px`;
                }

                document.addEventListener('mousemove', mouseMove);

                document.addEventListener('mouseup', function mouseUp(e) {
                    document.removeEventListener('mouseup', mouseUp);
                    document.removeEventListener('mousemove', mouseMove);
                });
            });
        }
        if (divUP.children[i].textContent == "Square") {

        }
        if (divUP.children[i].textContent == "Rectangle") {

        }
        if (divUP.children[i].textContent == "Triangle") {

        }
    })
}


//---------------------------------------------------------------------------------------
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