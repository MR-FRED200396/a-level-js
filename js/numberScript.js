// 'use strict'
// // HW NUMBER
// assign: evaluation
// var a = 5;  
// var b, c;

// b = a * 5 / 2;
// c = b;



// // Number: age
// let howOldAreYou = prompt ("How old are you?");
// const thisYear = 2022;
// alert(thisYear - howOldAreYou);



// // Number: temperature
// let whatIsTemperature = prompt ("What is a temperature?");
// const Farengeit = 33.8;
// let temperatureInFarengeit = whatIsTemperature * Farengeit;
// alert('In Farengeit it wass '+temperatureInFarengeit+'');
// // Можна погратись з функцією іф і можна зробити заокруглення значень



// // Number: divide
// let numberOne = prompt ('Write first number to make division operation ');
// let numberTwo = prompt ('Write second number to make division operation ');
// let divisionResult = Math.floor (numberOne / numberTwo);
// alert('Division result is '+divisionResult+'');



// // Number: currency
// const rateZloty = 3.5;
// let zloty = prompt ('How mach usd you want to change in zloty?');
// let resultChangedUsdToZloty = (zloty * rateZloty);
// alert (resultChangedUsdToZloty.toFixed(2));

// // let currencyExchange = prompt ('Hello in currency exchange! What walute our want to change?');
// // let usd = ('USD','usd','dolar','долар','бакси','долари','Долари','Долар','Dolar');
// // let uan = ('UAN','uan','hrywnia','hryvnia','grywnia','grywvnia','гривня','Гривня');
// // let eur = ('EUR','eur','euro','evro','ewro','Euro','Євро','євро');

// // if( currencyExchange === 'USD','usd','dolar','долар','бакси','долари','Долари','Долар','Dolar') 
// // {let usdExchange = prompt ('How mach dolar/s you want to change?');
// // let howMachDolar = usdExchange;
// // let whatWalutYouGet = prompt ('What walut you want to get?');

// // if (whatWalutYouGet === 'UAN','uan','hrywnia','hryvnia','grywnia','grywvnia','гривня','Гривня'){
// // let usdUan = 40;
// // let resultUsdUanChange = howMachDolar * usdUan;
// // alert('You geting '+resultUsdUanChange+' UAN. Thank you for changing and good buy!')
// // };
// // };
// // Чому не працює?



// // Number: RGB
// const red = +prompt('Write some number you want to make color red');
// const green = +prompt ('Write some number you want to make color green');
// const blue = +prompt ('Write some number you want to make color blue');
// alert(red.toString(16)+green.toString(16)+blue.toString(16) );



// // Number: flats
// let flats = prompt ('Write number of flat you want to see information? In this adress lives 48 flats.(3 entrans, 4 floor, 4 flats in one floor)');
// let flatNumber1 = Math.ceil(flats / 4);
// let flatNumber2 = Math.ceil(flats / 20);
// let flatNumber3 = Math.ceil(flats / 12);
// let flatNumber4 = Math.ceil(flats / 9);
// if( flats <= 16 )
// {alert('It is flat in entranses 1 in floor '+flatNumber1+'.')
// } else if(flats >= 17 && flats <= 20)
// {alert('It is flat in entranses 2 in floor '+flatNumber2+'.')
// } else if(flats >= 21 && flats <= 28)
// {alert('It is flat in entranses 2 in floor '+flatNumber3+'.')
// } else if(flats >= 29 && flats <= 32)
// {alert('It is flat in entranses 2 in floor '+flatNumber4+'.')
// } else if(flats >= 33 && flats <= 36)
// {alert('It is flat in entranses 3 in floor '+flatNumber5+'.')
// } else if(flats >= 37 && flats <= 44)
// {alert('It is flat in entranses 3 in floor '+flatNumber2+'.')
// } else if(flats >= 45 && flats <= 48)
// {alert('It is flat in entranses 3 in floor '+flatNumber3+'.')
// } else if(flats >= 49)
// {alert('This adress have not flat with this number')
// }; 
