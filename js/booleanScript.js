'use strict'
// HW Boolean
// Number: odd
// let njuy = prompt('Write some number');
// let njuyA = Number(njuy);
// if (njuyA % 2 == 0) {
// alert('Even number '+njuyA+'')
// }
// else if (njuyA % 2 !== 0) {
//     alert('Not even number '+njuyA+'')
//     };



// // String: lexics
// let someText = prompt(`Write some text, with out number`);
// let zero = someText.indexOf(0) == -1;
// let one = someText.indexOf(1) == -1;
// let two = someText.indexOf(2) == -1;
// let three = someText.indexOf(3) == -1;
// let four = someText.indexOf(4) == -1;
// let five = someText.indexOf(5) == -1;
// let six = someText.indexOf(6) == -1;
// let seven = someText.indexOf(7) == -1;
// let eight = someText.indexOf(8) == -1;
// let nine = someText.indexOf(9) == -1;
// let rezultSomeText = one && two && three && four && five && six && seven && eight && nine;
// if (rezultSomeText === true) {
//     alert('thank you so mach')
// } else
// {alert(`you write not corect information`)
// };

// інший варіант рішення
// let someText1 = prompt(`Write some text, with out number`);
// if (someText1 <= 10000000){
//     alert(`you write not corect information`)
// }else
// {alert(`thank you so mach`)
// };

//// інший варіант рішення2
// let someText = prompt(`Write some text, with out number`, "");
// let result = 'thank you so mach';

// for(let index = 0; index <= 9; index++) {
//     if(someText.includes(index)) {
//         result = "you write not corect information";
//     }
// }

// alert(result);

/// інший варіант рішення3
// let someText1 = prompt(`Write some text, with out number`, '');
// let result = 'thank you so mach';

// for(let index = 0; index < someText1.length; index++) {
//     if(!isNaN(+someText1[index])) {
//         result = "you write not corect information";
//         break;
//     }
// }

// alert(result);

/// інший варіант рішення3 !!!!!!!!!!!!!!!!!!!Регулярні вирази!!!!!!!!!!!!!
// let someText = prompt(`Write some text, with out number`, "");

// let textMessage = /\d/.test(someText)
//   ? "you write not corect information"
//   : "thank you so mach";

// alert(textMessage);




// Boolean
// let confirm1 = confirm(`are you a woman?`)
// let confirm2 = confirm1;
// alert(confirm2);



// Boolean: if
// let confirm3 = confirm(`are you a woman?`);
// let confirm4 = confirm3 == true ? alert(`you are woman`) : alert (`you are man`);




// Comparison: sizes

// let prompts = prompt (`change number 40 - 54 `);
// if(prompts == 40){
//    console.log(`in Finland it was 34`),
//    console.log (`in France it was 36`),
//    console.log (`in UK it was 8`),
//    console.log (`in USA it was 6`)
// }else if (prompts == 42){
//     console.log (`in Finland it was 36`),
//     console.log (`in France it was 38`),
//     console.log (`in Italy it was 40`),
//     console.log (`in UK it was 10`),
//     console.log (`in USA it was 8`)
// };

// let prompts = prompt (`change size 40 - 54 `);
// for ( let femi = 40; femi < 55; femi++){
// if (prompts == femi){console.log(prompts);
// };
// else {
// console.log(`you changed wrong size`)
// // }
// };
// let qwe = prompts;
// console.log(qwe);
// let contry = prompt (`change coutry`);
// if (contry !== USA){

// }
// треба допиляти вибір країни 




// Ternary

// let ternary = confirm (`are you a man?`);
// let ternaryAlert = ternary == true ? alert (`you are man`) : alert (`you are woman`);
// if(ternary == true){
// alert(`you are man`)
// }else{alert(`you are woman`)};




// Training
// bool type cast
// !!2
// !!0
// !!1
// // or
// 2 || 1
// 2 || 0
// //and
// 2 && 1
// 1 && 2
// 0 && 2
// // or and and difference
// 0 || 1 || 2
// 0 && 1 && 2
// 2 || 1 || 0
// 2 && 1 && 0
// confirm('left') || confirm('right')
// confirm('left') && confirm('right')
// //null, undefined, so on
// null || 2
// undefined && 1
// alert("Hello") && confirm('Are you sexy?');
// alert("Hello") || confirm('Are you drunk?');
// //brackets and complex expressions
// (undefined || 2) && (3 || 0)
// (2 && 1) || (null && 0)
// (2 > 1) && "greater"
// (2 < 1) && null
// null && (2 < 1)
// // ternary operator
// 1 ? "one" : "not one"
// 0 ? "zero" : "not zero"
// "0" ? "\"zero\"" : "not `zero`"
// parseInt("0") ? 'true' : 'false'
// ("" || 2) && (3 || "3.5") || (4 && 5)
// (-1 + 1) && "zero"
// "-1" + 1 && "oups"
// (typeof null === 'object') ? "null is object" : "null is null"
// // ternary && ||
// Math.random() < 0.5 && 'less' || 'more'
// (a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a
// //in for array
// [2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found'




// Prompt: or

// let howOldAreYou = prompt ("How old are you?");
// const thisYear = 2022;
// let rezult = (howOldAreYou > 0) || (howOldAreYou < 0);
// rezult ? console.log( thisYear - howOldAreYou ) : console.log(`Error`); 




// Confirm: or this days
// let shoping = confirm(`shoping?`);
// let result = shoping || shoping (console.log(`a you noob!`));




// Confirm: if this days
// let shoping = confirm(`shoping?`);
// if (shoping == true){console.log('okey');
// }else{console.log(`are you noob!`);};



// Default: or
// let name = prompt(`name`,``) || `Ivan`;
// let surName = prompt(`surname`,``) || `Ivanov`;
// let fatherName = prompt(`fathername`,``) || `Ivanovich`;
// let rezult =( `${name} ${surName} ${fatherName}`)
// console.log(rezult);



// Default: if
// let name = prompt(`name`,``);
// if (name == null) {
//     name = `Ivan`
// };
// let surName = prompt(`surname`,``);
// if (surName == null) {
//     surName = `Ivanov`
// };
// let fatherName = prompt(`fathername`,``)
// if (fatherName == null) {
//     fatherName = `Ivanovich`
// };
// let rezult =( `${name} ${surName} ${fatherName}`)
// console.log(rezult);




// Login and password
// let login = prompt(`login`);
// let loginToLowerCase = login.toLowerCase();
// let corectLogin = 'admin';
// if (loginToLowerCase === corectLogin){
//     alert(`congratulation`)
// }else{alert(`its wrong login, try again`)};
// let password = prompt(`password`);
// let passwordToLowerCase = password.toLowerCase();
// let corectPassword = 'qwerty';
// if (passwordToLowerCase === corectPassword){
//     alert(`congratulation`)
// }else{alert(`its wrong password, try again`)};





// Currency exchange
// let choiceWalut = prompt(`choice walut you want to channge(usd,euro,pln)`,`usd`,``);
// let choiceWalutToLowerCase = choiceWalut.toLowerCase();
// let howMachMoneyExchange = prompt(`how mach money to exchange?`,`100`,``);
// let buyOrSale = confirm(`press okey to buy or press cansel to sale`);
// let rateUsdEuro = 1.5;
// let ratePlnEuro = 4;
// let rateUsdPln = 3;

// let result
// let result2
// if (choiceWalutToLowerCase == `usd`){
//     if(buyOrSale === true){
//     result = howMachMoneyExchange / rateUsdEuro;
//     result2 = howMachMoneyExchange * rateUsdPln;
//     console.log(`give ${result} euro | ${result2} pln`);}else{
//     result = howMachMoneyExchange / rateUsdEuro;
//     result2 = howMachMoneyExchange * rateUsdPln;
//     console.log(`get ${result} euro | ${result2} pln`);
//     }

// }else if (choiceWalutToLowerCase == `euro`){
//     if(buyOrSale === true){
//     result = howMachMoneyExchange * rateUsdEuro;
//     result2 = howMachMoneyExchange * ratePlnEuro;
//     console.log(`give ${result} dolar | ${result2} pln`);}else{
//     result = howMachMoneyExchange * rateUsdEuro;
//     result2 = howMachMoneyExchange * ratePlnEuro;
//     console.log(`get ${result} dolar | ${result2} pln`);
//     }

// }else if (choiceWalutToLowerCase == `pln`){
//     if(buyOrSale === true){
//     result = howMachMoneyExchange / rateUsdPln;
//     result2 = howMachMoneyExchange / ratePlnEuro;
//     console.log(`give ${result} dolar | ${result2} euro`);}else{
//     result = howMachMoneyExchange / rateUsdPln;
//     result2 = howMachMoneyExchange / ratePlnEuro;
//     console.log(`get ${result} dolar | ${result2} euro`);
//     }

// };





// Scissors
// let rock = Math.random (prompt(` камінь ножниці бумага`));
// let scissors = Math.random (prompt(` камінь ножниці бумага`));
// let paper = Math.random (prompt(` камінь ножниці бумага`));
// let rezult = Math.min(rock, paper, scissors);
// if (rock == rezult){
//     console.log(`Камінь виграв!`);
// }else if (scissors == rezult){
//     console.log(`Ножниці виграли!`);
// }else{
//     console.log(`Бумага Виграла!`);
// };





// Задание на черный пояс
// Сделайте игру "камень-ножницы-бумага", как описано выше, пользуясь логическими операциями (&&, ||, !), 
// не используя if. Задание должно быть решено одним выражением

// let rock = Math.random (prompt(` k n b1`));
// let scissors = Math.random (prompt(` k n b2`));
// let paper = Math.random (prompt(` k n b3`));

// console.log(rock);
// console.log(scissors);
// console.log(paper);

// let rezult = rock > scissors || scissors > paper || rock > paper;
// console.log(rezult);
// rezult ? console.log(`wvwvwfv`) : console.log(`Камінь виграв!`);
// треба допиляти !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// Перевірте логін
// let login = prompt(`who is there?`);
// if (login === `admin`){
//     let password = prompt(`password?`)
//     if (password === `master`){
//     console.log(`welcome`)
//     }else if (password == null){
//     console.log(`canseled`)
//     }else if (password !== `master`)
//     {console.log(`wrong password`)}
// }else if(login == null){
// console.log(`canseled`)
// }else if (login !== `admin`){
// console.log(`I dont know you`)
// };



// let height = undefined;
// height = height ?? 100;
// console.log(height);

