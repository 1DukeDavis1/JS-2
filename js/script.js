//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// const names = fruts.map(item => item.name);

// console.log(names);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }

// let i = 0;

// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let number;

// while (number <= 100 || !number) {
//   number = prompt("Введіть число більше 100");

//   if (number === null || number === "") {
//     break;
//   }
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// const averageAge =
//   girls.reduce((sum, item) => sum + item.age, 0) / girls.length;

// console.log(averageAge);

// showMessage();

// function showMessage() {
//   console.log("GHe");
// }

// showMessage();

// let a = function () {
//   console.log("Hello");
// };

// a();

// let arr = [1, 2, 3, 4, 5];

// let arr1 = arr;

// arr1.push(6);

// console.log(arr);
// console.log(arr1);

let button = document.querySelector("#button");
let elem = document.querySelector('p');
let [input1, input2] = document.querySelectorAll('input');
 button.addEventListener('click', function() {
        elem.textContent = +input1.value + +input2.value
    })

