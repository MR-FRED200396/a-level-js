// оголошення обєкту через{}
let person = {
    name: `Vova`,
    age: 26,
    weight: {
        oneKilogram: false,
    },
    childrens: {
        sun:{
            name: `Ivan`,
            age: 5,
            "weight twenty killograms": true,
            childrens: null,
        },
        daughter:{
            name: `Nana`,
            age: 2,
            "weight five kilograms": false,
            childrens: null,
        }
    }
}

console.log(person);
console.log(person.childrens.sun["weight twenty killograms"]);/*до ключів звертаємось через крапку, до ключів з 2 слів через [''] */
// оголошення обєкту через new Object
let car = new Object();
car.mark = `Volswagen`,
car.model = `Golf`,
car.year = 2011,
car.baby = null,
car.fiveDors = true,
car.leftDors = {
    window: 1,
    weight: true,

}

console.log(car);
console.log(car.model);

// Завдяки [] можемо взяти значення ключа зі змінної з fruit на plump
// let fruit = prompt(`What frukt you want?`,`plump`,``);
// console.log(fruit);
// let bag = {
//   [fruit]: 5, // назву властивості взято зі змінної fruit
// };

// console.log( bag.plump ); // 5 якщо fruit="apple"

// якщо хочемо зробити значення ключа такеж як сам ключ то пишемо так як name в прикладі
let user = {
    name,  // те ж саме, що name:name
    age: 30,
  }
  console.log(user.age);


//   перевірка чи такий ключ існує за допомогою in
let phone = {
    model: `iphone`, 
    "have processor": 1,
}
console.log(
    "model" in phone, /*якщо змінна є то повертає true якщо немає то false*/ 
    ["have processor"] in phone,
    "memory" in phone
    );


    // за допомогою циклу for in перебираємо обєкт по його ключах
    let codes ={
        "+49": "Німеччина",/*якщо ключ НЕ МОЖНА перевести з нимбер в стрічку і назад то значення вистроюються в порядку створення*/
        "41": "Швейцарія",/*якщо ключ можна перевести з нимбер в стрічку і назад то значення вистроюються в числовому порядку*/
         44: "Великобританія",
        "+1": "США",
     };
     
     for (let key in codes) {
       console.log(key); 
     }


     console.log(`TASKS 1`);

//      Привіт, object

// Напишіть код, виконавши завдання з кожного пункту окремим рядком:

// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням Іван.
// Додайте властивість surname зі значенням Сміт.
// Змініть значення name на Петро.
// Видаліть властивість name з об’єкта.

let emptyObjekt = {};
emptyObjekt.name = `Ivan`;
emptyObjekt.surname = `Smit`;
emptyObjekt.name = `Petro`;
delete emptyObjekt.name 
console.log(emptyObjekt);


console.log(`TASKS 2`);

// Перевірка на порожнечу
// Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.
// моє рішення
let obj = {};
    obj.bulding = 5;
// console.log("bulding" in obj, '' in obj);

// правильне рішення
// function isEmpty(obj){
// for (let key in obj){
//     return false;
// }
//   return true;
// };
// isEmpty()

console.log(`TASKS 3`);

// Сума властивостей об’єкта
// У нас є об’єкт для зберігання заробітної плати нашої команди:
// Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. У наведеному вище прикладі має бути 390.
// Якщо об’єкт salaries порожній, то результат має бути 0.


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
function suma() {
    for (let key in salaries){
        return salaries.Ann + salaries.John + salaries.Pete ; /*виводить JohnJohnJohn*/
    }
return 0;
}
console.log(suma());

// правильне рішення 
let sum = 0;
for(let key in salaries){
    sum += salaries[key]
};
console.log(sum);



console.log(`TASKS 4`);

// Помножте числові значення властивостей на 2
// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.
// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо змінювати об’єкт.
// P.S. Використовуйте typeof для перевірки, що значення властивості числове.

let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

// я не зміг вирішити
// function multiplyNumeric(menu){
//     for (let key in menu){
//     return menu[key]*= 2;
//     }
// }

// console.log(menu);
// console.log(multiplyNumeric());

// правельне рішення
function multiplyNumeric(menu) {
    for (let key in menu) {
      menu[key] *= 2;
      
    }
  }
  console.log(multiplyNumeric());