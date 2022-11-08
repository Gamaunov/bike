// задание 6:Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
//  Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
const arrOne = [1, 3, 5, true, "some string"];
const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8];

function checkArray(arr, i = 0) {
    if (arr.length < 2 || i == arr.length - 1) {
        return true;
    }
    return typeof arr[i] !== typeof arr[i + 1] 
    ? false 
    : checkArray(arr, ++i);
}
console.log(checkArray(arrOne));
console.log(checkArray(arrTwo));
