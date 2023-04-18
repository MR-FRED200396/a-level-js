'use strict'

// practis ternar perator
// let ternarOperator = prompt(`how old are you?`);
// let mesage = (ternarOperator < 5) ? 'hello baby':
// (ternarOperator < 20) ? `hello human`:
// `hello old human`;
// alert (mesage);

// !!!!!!!!!!!!!!можна якісь задачки не тернарний оператор порішати!!!!!!!!!!!!!!

// ЦИКЛИ

// завдання1
// При помощи цикла for выведите чётные числа от 2 до 10.
// for(let i = 0; i < 10; i++ ){
//     if (i % 2 !== 0) continue;
// console.log(`парні від 1-10 ${i}`);
// };
// завдання2
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let index = 0; index < 1; index++) {
//     console.log( `forNumber ${index}!` );
//   };
// let index = 0;
// while(index < 1){
//     console.log( `whileNumber ${index}!` );
//     index++;
// };
// завдання3
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// то як зробив я
// let numberBiger100;
// do {
//   numberBiger100 = prompt('write number bigger than 100', 0);
//   numberBiger100++;
// } while (numberBiger100 <= 100 && numberBiger100);
// // допиляти з кнопкою відміна

// привильне рішення
// let num;
// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// завдання4
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

// так я зробив , але код не робочий
//  const maxNumber = 10;
//  for (let index = 2; index < maxNumber; index++){

//   if (index % 2 == 2)continue;

//   console.log(index);
//  };

//  привильне рішення
//  let n = 10;

//  nextPrime:
//  for (let i = 2; i <= n; i++) { 
 
//    for (let j = 2; j < i; j++) { 
//      if (i % j == 0) continue nextPrime; 
//    }
 
//    console.log(`Прості числа від 1 до n ${i}`); 
//  };

//  - Завдання №1 
// скласти цикл while, який виводить у консоль числа від 0 до 7 (не включно).
// let number0_6 = 0;
// while (number0_6 < 7) {
//   console.log(`while від 0 до 7 (не включно)`, number0_6);
//   number0_6++;
// };

// - Завдання №2 
// скласти цикл while, який три рази запускає confirm.
// let i = 0;
// while(i < 3){
//   confirm(`confirm 3 time`);
//   i++
// };

// - Завдання №3 
// скласти цикл do...while, який додає до кожного числа від 4 до 9 (включно) число 2.
// let index = 3; do { index++; console.log('do...while, який додає до кожного числа від 4 до 9 (включно) число 2',index + 2); } while (index < 9);

// - Завдання №4 
// скласти цикл for, який виводить у консоль числа від 4 до 9 (не включно).
// for (let index = 5; index < 9; index++) {
//   console.log(`for, який виводить у консоль числа від 4 до 9 (не включно) ${index}`);
// };

// - Завдання №5 
// скласти цикл for, який виводить у консоль 34 рази слово "Linux".
// for (let index = 0; index < 35; index++) {
//   console.log(`linux`);
  
// };

// - Завдання №6 
// скласти цикл for, який виводить у консоль числа від 5 до -13 (включно).
// for (let index = 5; index > -14; index--) {
//   console.log(`for, який виводить у консоль числа від 5 до -13 (включно) ${index}`);
// };


// заввдання 1 вивести всіма циклами цифри від 0 до 5 в консоле
let num = 0;
// while(num < 6){ console.log(num); num++}
// do{console.log(num);num++}while(num<6);
for(;num< 6; num++){console.log(num);}



// зупинити роботу цикла for (let num) якщо значення size === 1
// forPoint:for(let num = 0; num < 2; num++){
//     for(let size = 0; size < 3; size++){
//         if(size === 1){
//         break forPoint
//         }
//         console.log(size);
//     }
// }


