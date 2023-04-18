'use strict'
// Створіть калькулятор
// Створіть об’єкт calculator з трьома методами:
// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.


// let calculator = {
//     sum(){return this.a + this.b;},
//     mul(){return this.a * this.b;},
//     read(){
//     this.a = +prompt("a?", 1);
//     this.b = +prompt('b?', 1);
//     }

// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );



// // Ланцюг викликів
// // Існує об’єкт ladder, що дозволяє підійматися вгору-вниз:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this; /*додав return this */
//   },
//   down() {
//     this.step--;
//     return this; /*додали return this */
//   },
//   showStep: function() { 
//     alert( this.step );
//     return this; /*додав return this */
//   }
// };
// // Тепер, якщо нам потрібно зробити кілька викликів послідовно, можна зробити це так:

// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // ladder.down();
// // ladder.showStep(); // 0
// // Змініть код up, down і showStep так, щоб зробити доступним ланцюг викликів, наприклад:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// // Такий підхід широко використовується в бібліотеках JavaScript.



