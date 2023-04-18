`use strict`
// просто приклад синтаксису
// let number = 5 + 5;

// switch (number) {
//     case 6:
//         console.log(`not true`);
//         break;
//         case 11:
//         console.log(`not true 2`);
//         break;
//         case 10:
//             console.log(`true`);
//         break;

//     default:
//         console.log(`default`);
//         break;
// }


// Перепишіть умови "if" в конструкцію "switch"
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }


// рішення
// let a = +prompt('a?', '');
// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert(`2,3`);
//         break;
// }



// Перепишіть конструкцію "switch" в аналогічну з використанням "if"
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Ми підтримуємо і ці браузери' );
//       break;
  
//     default:
//       alert( 'Маємо надію, що ця сторінка виглядає добре!' );
//   }


// рішення
// let browser = prompt(`Browser`,``);
// if (browser === `Edge`){
//     alert(`You have got the Edge`)
// }else if (browser === `Chrome` || browser === 'Firefox' || browser === `Safari` || browser ===`Opera`){
//     alert(`We suport this browsers too`)
// }else{
//     alert(`We hope this page look good`)
// };


