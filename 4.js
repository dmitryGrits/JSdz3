"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function sumNumber (firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function diffNumber (firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber - secondNumber
    } else {
        return secondNumber - firstNumber
    }
}

function multNumber (firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

function divNumber (firstNumber, secondNumber) {
    return firstNumber / secondNumber
}


// console.log(sumNumber(2,6));
// console.log(diffNumber(2,6));
// console.log(multNumber(2,6));
// console.log(divNumber(2,6));