//Suma de digitos
let num = 12345;
let nums = num.toString().split('');

// let arrayNumbers = nums.map(function(number){
//     return Number(number);
// })

let arrayNumbers = nums.map(Number);


//Reto 1 
// function flatten(arrays) {
//     // Code goes here...
//     let newArray = [];
//     arrays.forEach(array => {
//         element.forEach(element => {newArray.push(element)});
//     });
// }
  
// const arrays = [[1, 2, 3], [4, 5], [6]];
// const array = flatten(arrays);

// console.log(array); // [1, 2, 3, 4, 5, 6]


//Reto 2 
function compact(array) {
    return array.filter(element => element);
  }

const array = [0, 1, false, 2, '', 3];
const compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]

//Reto 3
function loop(start, test, update, body) {
  for(;test(start);start=update(start))
  {
    body(start)
  }
}

const test = function(n) {
  return n > 0;
}

const update = function(n) {
  return n - 1;
}

loop(3, test, update, console.log);
// 3
// 2
// 1