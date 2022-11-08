//Задание 7:Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.При выполнении задания необходимо учесть,
// что массив может содержать не только числа, но и, например, знаки, null и так далее.
const arr = [0, 1, 2, -1, -2, true, null, '1', undefined];
let even = 0;
let odd = 0;
let findNull = arr.filter((item) => item === 0);

const evenOrOdd = () => {
for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number"
        && arr[i] % 2 == 0
        && arr[i] !== 0
        && arr[i] != null) {
        even++;
    }
        if (typeof arr[i] == "number"
        && arr[i] % 2 !== 0
        && arr[i] !== 0
        && arr[i] != null) {
        odd++;
    }
    }
}
evenOrOdd()
console.log(`even - ${even}`);
console.log(`odd - ${odd}`);
console.log(`zero - ${findNull.length}`);

