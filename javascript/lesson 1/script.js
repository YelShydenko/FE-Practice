// let car1 = "BMW";
// let car2 = "MERCEDES";
// let car3 = "FORD";
// let car4 = "Lincoln";

// document.write(`<h2> ${car1} </h2>`);
// document.write(`<h2> ${car2} </h2>`);
// document.write(`<h2> ${car3} </h2>`);

// let cars = ["BMW", "MERCEDES", "FORD"];

// for (let i = 0; i < cars.length; i++) {
//     document.write(`<h2> ${cars[i]} </h2>`);
// }

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         for (let k = 0; k < 10; k++) {
//             console.log(i, j, k);
//         }
//     }
// }
let numbers = [2, 3, 4, 5, 6]

let modifedNumbers = numbers.map(function (elem) {
   return elem ** 2
})
console.log(modifedNumbers);

// ---------------------------------------------------------------------------------------

const mapV2 = (array, callback) => {
   let newAray = [];
   console.log(array, callback);

}
console.log(mapV2([2, 3, 4, 5, 6], num => num ** 2));