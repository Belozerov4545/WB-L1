// Задача на модули и использование внешних библиотек: 
// напишите модуль, который экспортирует функцию для работы с датами. 
// Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

function moduleMoment() {
    // текущая дата
    let momentDate = moment();
    
    const weekBtn = document.getElementById('week');
    const hoursBtn = document.getElementById('hours');
    const yearsBtn = document.getElementById('years');
    
    function display(moment) {
        // вывод значения объекта moment в #displayMoment div
        let eDisplayMoment = document.getElementById('displayMoment');
        eDisplayMoment.innerHTML = moment;
      
    };
    
    // добавляем 7 дней к текущей дате
    weekBtn.addEventListener('click',() => {
        let momentDate = moment();
        let eDisplayMoment = document.getElementById('displayMoment');
        eDisplayMoment.innerHTML = momentDate.add('days', 7);
    });
    
    // вычетаем 8 часов от текущей даты
    hoursBtn.addEventListener('click', () => {
        let momentDate = moment();
        let eDisplayMoment = document.getElementById('displayMoment');
        eDisplayMoment.innerHTML = momentDate.subtract('hours', 8);
    })
    
    // добавляем 5 лет и 3 месяца к текущей дате
    yearsBtn.addEventListener('click', () => {
        let momentDate = moment();
        let eDisplayMoment = document.getElementById('displayMoment');
        eDisplayMoment.innerHTML = momentDate.add({years: 5, months: 3});
    })
    
    display(momentDate);
}

export default moduleMoment;