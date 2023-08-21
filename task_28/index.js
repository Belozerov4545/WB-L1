// 28. Задача: Создать и добавить элемент с использованием шаблонов: 
// Напишите функцию, которая создает новый элемент с использованием шаблонов 
// (например, с помощью тега <template>) и добавляет его в DOM.

let tmpl_btn = document.getElementById('tmpl_btn');
let container = document.getElementById('container');

function useTamolate() {
    let elem = document.createElement('div');

    elem.style.width = '100px';
    elem.style.height = '100px';
    elem.style.backgroundColor = 'coral';
    elem.style.margin = '5px';
    elem.style.display = 'flex';
    elem.style.alignItems = 'center';

    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    // Клонируем содержимое шаблона для того, чтобы переиспользовать его несколько раз
    elem.append(tmpl.content.cloneNode(true));
    
    container.append(elem);
    // Сейчас скрипт из <template> выполнится
}

tmpl_btn.addEventListener('click', useTamolate)