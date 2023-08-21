// 29. Задача: Взаимодействие с формами: 
// Напишите функцию, которая получает данные из формы на веб-странице 
// и выполняет определенные действия с этими данными, например, 
// отправляет их на сервер или отображает всплывающее окно с результатами.

const form = document.getElementById('form');
const submit_btn = document.getElementById('submit_btn');

const input_1 = document.getElementById('input_1');
const input_2 = document.getElementById('input_2');

const radio_1 = document.getElementById('radio_1');
const radio_2 = document.getElementById('radio_2');

const checkbox = document.getElementById('check_1');
const options = document.getElementsByTagName('option');

const container = document.getElementById('container');

function submitHandler(event) {
    event.preventDefault();
    
    let element = document.createElement('div');
    
    element.style.height = '50px';
    element.style.backgroundColor = 'coral';
    element.style.margin = '5px';
    container.style.marginTop = '20px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    
    if (input_1.value) {
        let element = document.createElement('div');
        element.textContent = `Значение поля ввода: ${input_1.value}`;
        container.appendChild(element, container);
    }

    if (input_2.value) {
        let element = document.createElement('div');
        element.textContent = `Значение текстового поля ввода: ${input_2.value}`;
        container.appendChild(element, container);
    }

    if (radio_1.checked) {
        let element = document.createElement('div');
        element.textContent = radio_1.value;
        container.appendChild(element, container);
    }

    if (radio_2.checked) {
        let element = document.createElement('div');
        element.textContent = radio_2.value;
        container.appendChild(element, container);
    }

    if (checkbox.checked) {
        let element = document.createElement('div');
        element.textContent = checkbox.value;
        container.appendChild(element, container);
    }

    for (let i = 0; i < options.length; i++) {
        const element = options[i];
        if (element.selected) {
            let el = document.createElement('div');
            let clone = element.cloneNode()
            el.textContent = element.value;
            container.append(el.textContent);
        }
    }
}

submit_btn.addEventListener('click', submitHandler)