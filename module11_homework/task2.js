//Задание 2:Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет,
//  является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, то выводится сообщение,
//  что данные неверны. Обратите внимание на числа 0 и 1.
function isPrime(number) {
    if (number < 2 || number > 1000 || typeof number !== "number") {
      return console.log("данные неверны");
    }
    if ((number % 2 === 0 && number !== 2) || number <= 1) {
      return console.log("составное число");
    }
  
    const limit = Math.floor(Math.sqrt(number));
  
    for (let index = 3; index <= limit; index += 2) {
      if (number % index === 0) {
        return console.log("составное число");
      }
    }
    return console.log("простое число");
  }
  
  console.log(isPrime(2));