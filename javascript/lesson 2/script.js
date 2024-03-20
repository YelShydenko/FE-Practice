// let countries = ['Malta', 'Greeland', 'Panam', 'Armenia', 'Ukraine', 'Germany']
// countries.splice(1, 2);
// console.log(countries);

// let country = countries.splice(1, 1)
// console.log(countries, country);

// countries.splice(1, 1, 'France');
// console.log(countries);

// countries.splice(1, 0, 'France', 'China');
// console.log(countries);

let products = [
    // id, title, image, price
    ["1", "GoPro HERO12 Black", "https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_UL320_.jpg", 349],
    ["2", "TP-Link Tapo 1080P", "https://m.media-amazon.com/images/I/61gJcez9unL._AC_UL320_.jpg", 17],
    ["3", "KODAK PIXPRO WPZ2", "https://m.media-amazon.com/images/I/5186bjryKaL._AC_UL320_.jpg", 149],
    ["4", "WYZE 2K HDR Wireless", "https://m.media-amazon.com/images/I/61ixGPWFxlL._AC_UL320_.jpg", 76],
    ["5", "Arlo Essential Spotlight", "https://m.media-amazon.com/images/I/61vjkXGNuQL._AC_UL320_.jpg", 176],
];

// const getAveragePrice = products.reduce(function(elem, currentValue) {
//     return elem + currentValue[3] / products.length
// }, 0)
// console.log(getAveragePrice);

// function getAveragePrice(data) {
//     // const averageSum = data.reduce(
//     //     (accumulator, currentValue) => accumulator + currentValue[currentValue.length - 1],
//     //     0,
//     // );
//     // return averageSum / data.length;

//     let averageSum = 0;
//     data.forEach(currentValue => {
//         averageSum += currentValue[currentValue.length - 1]
//     });
//     return averageSum / data.length;
// }

// console.log(getAveragePrice(products));


// const getUpperCaseTitle = products.map(function (elem) {
//     return elem[1].toUpperCase()
// })

// function getUpperCaseTitle(data){
    // const str = data.reduce(
    //     (accumulator, currentValue) => {
    //         accumulator.push(currentValue[1].toUpperCase());

    //         return accumulator;
    //     },
    //     []
    // );

    // return str;

    // let str = [];
    // data.forEach(currentValue => {
    //     str.push(currentValue[1].toUpperCase());
    // });
    // return str;
// }

// console.log(getUpperCaseTitle);

function removeProductById(id, data){
    return data.filter(product => product[0] !== id)
}
console.log(removeProductById('4', products));