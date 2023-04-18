//                                          гра любить не любить на пелюстках троянди

// function howMuchILoveYou(nbPetals) {
//     return ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][(nbPetals - 1)%6]
// }
// console.log(howMuchILoveYou(128));



//                                                  перетворення з 1 на 'один'

// function switchItUp(n){
//     return[`zero`,`one`,`two`][n]
// }
// console.log(switchItUp(2));



//                                                          визначає століття

// function centry(year){
//     return Math.floor(year /100)+ ((year % 100)? 1 : 0)
// }
// console.log(centry(1801));



//                                      якщо число парне множе на 8, якщо не парне то множе на 9

// function simpleMultiplication(number) {
//  return (number % 2) === 0 ? (number * 8) : (number * 9)
// }



//                              визначає через скільки років треба буде місто що б досягнути певної кількості жтелів 

/*p0 = скільки є жителів зараз
percent= який відсоток приросту або спаду жителів від p0 хочемо врахувати
aug = скільки приїжджає інших людей з інших міст жити в наше місто
p= скільки хочемо мати жителів в результаті
*/
// function nbYear(p0, percent, aug, p) {
//   let year = 0;
// while(p0 <= p){p0 = Math.floor(p0 + p0* (percent / 100) + aug);
//               year++;
//   }
//   return year;
// }



//                                      функція що сумує всі додатні значення масиву через reduce

// function positiveSum(arr) {
//     return arr.reduce((x ,y) => x + (y > 0 ? y : 0), 0)
//     }



/*                                          функція видаляє ! з рядка і повертає рядок без ! */

// function removeExclamationMarks(s) {
//     return s.replace(/!/g,``)
//    }



//                                          функція яка повертає масив з зміненими значеннями 
//                                          якщо було 3 то стане -3 і навпаки.
//                                          (все за допомогою множення чисел масиву на 1 або -1)

// function invert(array) {
//     for (let i = 0; i < array.length; i++) {
//           if(array[i] === "0") {
//             array[i] = array[i] * (1);
//           }
//           array[i] = array[i] * (-1);
//        }
//     return array ;
//  }



//                                     функція яка revers стрічку, але порядок слів залишить той же

// function reverseWords(str) {

//     let wordsArr = str.split(" ").map(e => e.split("").reverse().join(""));
//     return wordsArr.join(" ");
//  }
// console.log(reversWords('one word')); поверне 'eno drow'



//                                     функція яка revers стрічку, але 1 слово стає перевернктим останнім

// function reversWords (str){
//     return str.split('').reverse().join('');
// }
// console.log(reversWords('one word')); поверне drow eno



//                                      функція що видаляє всі голосні зі стрічки НЕ залежно від реєстру 

// function disemvowel(str) {
//   return str.replace(/[aeiouy]/gi, '');
// }



//                                              функція що повертає стрічку н разів

// function repeatStr (n, s) {
//     return s.repeat(n);
//   }



//                                               функція 'рахує овець' в залежності від того скільки загади

// var countSheep = function (num){
//     let i;
//     let str = "";
//     for( i = 1; i <= num; i++){
//        str = str + `${i} sheep...`; 
//     }
//     return str;
//   }



//                                      функція яка перевіряє чи є такіж самі букви в сирічці 
//                                      якщо повторюються  повертає false якщо не повторюються true

// function isIsogram(str) {
//     if (str.isEmpty) {
//       return true;
//     } else {
//       str = str.toLowerCase();
//     } 
//     var array = str.split('');
//     var sortedArr = array.slice().sort();
  
//     for (var i = 0; i < array.length; i++) {
//       if (sortedArr[i + 1] == sortedArr[i]) {
//         return false;
//       }
//     }
//     return true;
//   }



//                                      функція яка порівнює yourPoints з середнім арифметичним масиву classPoints

// function betterThanAverage(classPoints, yourPoints) {
//     let classPoin = classPoints.reduce((a,b) => a + b) / classPoints.length;
//     if ( yourPoints > classPoin){
//       return true
//     }else {return false}
    
//   }



//                                      функція яка перевіряє чи закінчується стрічка str стрічкою ending

// function solution(str, ending){
//     return str.endsWith(ending);
//   }



//                                      функція що сортує маств від меншого до більшого

// function sumTwoSmallestNumbers(numbers) {  
//     return numbers.sort((a,b)=> a - b);
//    }



//                                      функція яка замінює символи в стрічці на інші

// function correct(string){
//     return string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I')
//   }



//                                      функція змінює abc на [1 2 3] не залежно від реєстру

// function alphabetPosition(text) {
//     return text.split('').filter(v=>/[a-zA-Z]/.test(v)).map(v=>v.toLowerCase().charCodeAt(0)-96).join(' ');
//    }



//                                      функція яка вираховує середнє арифметичне масиву + перевіряє масив на пустоту
// function findAverage(arr) {
//     return arr.reduce((acc, el) => acc + el, 0 ) / (arr.length || 1)
// }



//                                      функція вираховує через скільки років покладена сума в банк(principal)
//                                      буде дорівнювати бажані сумі(desired) при %ставці(interest) і по
//                                      олаті щорічних податків(tax) від доходу

// function calculateYears(principal, interest, tax, desired) {
//     let y = 0;
//    while (principal < desired){
//          principal += principal * interest * (1 - tax);
//      y++;
//      }
//   return y;
//  }



//                                       функція яка фільтрує і залишає лище унікальні значення масиву
// function unique(arr) {
//     return Array.from(new Set(arr))
//   }



//                                        функція перевіряє чи можна взяти корінь квадратний з числа (повертає true or false)
// function squareNumber(n){
//     return Math.sqrt(n) % 1 === 0;
//   }