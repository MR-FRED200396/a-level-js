'use strict'

// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Батьки дозволили?');
//     }
//   };

// ріщення 1
//   function checkAge(age) {
//     return(age > 18) || confirm('Батьки дозволили?');
//   };

//   рішення 2

// function checkAge(age) {
//     return(age > 18) ? true : confirm('Батьки дозволили?');
//   };

// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// function returnMin(a, b) {
//   return (a > b) ? a : b; 
// };

// Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n.
// Інакше кажучи, множить число x саме на себе n разів і повертає результат.
// function returnPow(x, n) {
//     let rezult = x;
//     for(let index = 1; index < n; index++){
//         rezult *= x;
//     }
//     return rezult
// };
// let x = prompt(`x`,``);
// let n = prompt(`n`,``);

// alert(returnPow(x, n));


// приклади виклику функції
// function lol (){
//    return console.log(`some text`);
// }
// lol();


// функція що запитує згоду
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Ви згодні?",
//     function() { alert("Ви погодились."); },
//     function() { alert("Ви скасували виконання."); }
//   );



// Перепишіть з використанням стрілкових функцій
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Ви згодні?",
//     function() { alert("Ви погодились."); },
//     function() { alert("Ви скасували виконання."); }
//   );

//   рішення
// let ask = (guestion, yes, no) => {
//     (confirm(question)) ? yes() : no();
// }
// ask(
//     `are you agree?`,
//     () => alert(`you agree`),
//     () => alert(`you not agree`),
// )










