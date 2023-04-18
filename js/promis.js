// let a = 7;
// // const a = 7;
// setTimeout(() => {
//     a = 99;
//     // console.log(a);
// }, 2000);

// console.log(a);

// let b = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve (a = 99);
//     }, 2000);
// });

// b.then(function(){
//     console.log(a);
// })



const p = new Promise((resolve, reject)=>{
    console.log('settimeout start...');
    setTimeout(() => {
        console.log('timeout end!');
        resolve({status: 'ok',})
    }, 3000);
})

p.then((data) => console.log(data))
.catch(Error => console.log(error))
.finally(() => console.log('finally'))