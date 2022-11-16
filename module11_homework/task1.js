//Задание 1:постарайтесь дать этой функции корректное название
const arr = [0, 1, 2, -1, -2, true, null, "1", undefined];
let even = 0;
let odd = 0;
let findNull = arr.filter((item) => item === 0);

function countEvenAndOdd() {
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] == "number" &&
      arr[i] % 2 == 0 &&
      arr[i] !== 0 &&
      arr[i] != null
    ) {
      even++;
    }
    if (
      typeof arr[i] == "number" &&
      arr[i] % 2 !== 0 &&
      arr[i] !== 0 &&
      arr[i] != null
    ) {
      odd++;
    }
  }
}
countEvenAndOdd();
console.log(`even - ${even}`);
console.log(`odd - ${odd}`);
console.log(`zero - ${findNull.length}`);
