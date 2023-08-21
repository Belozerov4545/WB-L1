// 27. Задача: Добавить анимацию для элемента: 
// Напишите функцию, которая добавляет анимацию для элемента на веб-странице, 
// например, плавное изменение его положения или размера.

function myMove() {
    let element = document.getElementById('myAnimation');
    let pos = 0;
    let id = setInterval(frame, 10);

    function frame() {
        if (pos === 350) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';
        }
    }
}