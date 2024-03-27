// console.log("Начало кода!");

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log("Конец кода!");

// const foo = () => console.log(1);
// const bar = () => console.log(2);
// const bar = () => setTimeout(() => console.log(2), 2000);
// const baz = () => console.log(3);

// foo()
// bar()
// baz()

// 1 3 2

// const first = () => console.log(1);
// const second = () => setTimeout(() => console.log(2), 2000);
// const third = () => {
//     console.log(3);

//     Promise.resolve().then(()=>{
//         console.log("Promise 1");
//     })

//     Promise.resolve().then(()=>{
//         console.log("Promise 2");
//     })
// }

// const fourth = () => console.log(4);

// first();
// second();
// third();
// fourth();

// 1 3 4 "Promise 1" "Promise 2" 2

// console.log("start");

// const promise = new Promise(res => {
//     console.log(1);
// })

// console.log("end");
// start 1 end

// console.log("start");

// const promise = new Promise(res => {
//     console.log(1);

//     res(2);
// })

// promise.then((x)=> console.log(x));
// // promise.then(console.log);

// console.log("end");
// start 1 end 2

// console.log("start");

// const promise = new Promise(res => {
//     console.log(1);

//     res(2);

//     console.log(3);
// })

// promise.then((x)=> console.log(x));
// promise.then(console.log);

// console.log("end");
// start 1 3 end 2

// console.log("start");

// const promise = new Promise(res => {
//     console.log(1);
// })

// promise.then(res => console.log(2));

// console.log("end");

// start 1 end

// console.log("start");

// const fn = () => new Promise(res => {
//     console.log(1);

//     res("success")
// })

// console.log("middle");

// fn().then(res => console.log(res));

// console.log("end");

// start middle 1 end success

// function log(x){
//     console.log(x);
// }

// console.log("start");
// let promise1 = new Promise(res => res(1)).then(res => console.log(res))
// let promise2 = new Promise(res => res(2)).then(console.log)
// Promise.resolve(1).then(log)
// Promise.resolve(2).then(console.log)

// console.log("end");
// start end 1 2

// const square = (x) => x **2;

// let numbers = [1,2,3,4,5];

// numbers = numbers.map(square);

// console.log(numbers);

const promise = new Promise((resolve) => {
  console.log(1);

  setTimeout(() => {
    console.log("setTimeout Start");
    resolve("success");
    console.log("setTimeout End");
  }, 0);

  console.log(2);
});

promise.then(console.log);

console.log(4);

// 1, 2, 4, setTimeout Start, setTimeout End, success
