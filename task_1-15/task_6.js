// 6. Задача о сортировке объектов: 
// у вас есть массив объектов вида { name: 'John', age: 25 }. 
// Напишите код, который сортирует этот массив по возрастанию возраста, 
// а при равных возрастах сортирует по алфавиту по полю name.

function sortArray(array) {
    let sortedArr = array.sort(function(a, b) {
    return (b.name<a.name) - (a.name<b.name) && (b.age<a.age) - (a.age<b.age);
    })
    return console.log(sortedArr)
  }