// 15. Задача на асинхронность: 
// напишите асинхронную функцию, 
// которая использует ключевое слово await 
// для ожидания выполнения других асинхронных операций, 
// и возвращает результат выполнения.

async function myFunc() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 3000)
    });
    
    let result = await promise;
    console.log(result)
  }
  