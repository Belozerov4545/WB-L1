// 25. Задача: Создать и добавить стиль для элемента: 
// Напишите функцию, которая создает новый элемент, 
// добавляет его в DOM и устанавливает для него стиль с помощью CSS.

let btn = document.getElementById('add_element');
let container = document.getElementById('container');

function addElementFunc() {
    let element = document.createElement('div');

    element.style.width = '50px';
    element.style.height = '50px';
    element.style.backgroundColor = 'red';
    element.style.margin = '5px';
    container.style.display = 'flex';
    container.style.flexDirection = 'row';

    container.appendChild(element, container);
}

btn.addEventListener('click', addElementFunc)