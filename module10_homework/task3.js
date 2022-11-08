// задание 3:Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
// Например, "Hello" -> "olleH".
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
