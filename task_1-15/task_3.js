// 3. Реализовать аналог библиотеки Math (можно назвать MathX) 
// с базовым набором функций, используя замыкания:
// - вычисление N-го числа в ряду Фибоначчи 
// - вычисление всех чисел в ряду Фибоначчи до числа N
// - вычисление N-го простого числа
// - вычисление всех простых чисел до числа N

// Будет плюсом, если задумаетесь и об оптимизации.

class MathX {
    // функция вычисления N-го числа в ряду Фибоначчи
    fib (num) {
        // определяем переменные текущего (prev) и следующего значения (next)
        let prev = 0, next = 1;
        // в цикле проходим по всем числам от 0 до num
        for (let i = 0; i < num; i++){
        // в каждой итерации цикла определяем значение next, 
        // как сумму текущего и следующего знаения
          next = prev + next;
        // а текущее значение, как разность следующего числа и предыдущего 
          prev = next - prev;
        }
        // возвращем число num в ряду Фибоначчи
        return prev;
      }
    
    // функция вычисления всех чисел в ряду Фибоначчи до числа N
    fibArr(num) {
        // определяем переменную для хранения ряда чисел
        let result = [];
        // в цикле проходим по всем числам до num
        for (let i = 0; i <= num; i++) {
        // на каждой итерации цикла добавляем в наше "хранилище" результат работы фунции fib(n)
          result.push(fib(i));
        }
        // возвращаем ряд чисел Фибоначчи до числа num
        return console.log(result);
    }
    
    // функция вычисления N-го простого числа
    isPrime(num) {
        // в цикле проходим по всем числам от 2 до num - 1
        for (let i = 2; i < num; i++) {
        // проверяем что число num делится на все числа от 2 до num - 1 без остатка
        // если делится - false(число не простое), если нет, то переходим к блоку кода ниже 
        if (num % i === 0) return false;
        }
        // число не делится без остатка, результат проверки - true(число простое)
        //проверяем что num не равен 1 и возвращаем результат
        return num !== 1;
      }
    
    // функция вычисления всех простых чисел до числа N
    primesArr(num) {
        // определяем переменную для хранения ряда чисел
        let result = [];
        // в цикле проходим по всем числам от 2 до num
        for (let i = 2; i <= num; i++) {
        // на каждой итерации цикла добавляем в наше "хранилище" число,
        // если результат работы фунции isPrime(i) равен true
          if (isPrime(i)) result.push(i);
        }
        // возвращаем ряд простых чисел до числа num
        return console.log(result);
      }
}
