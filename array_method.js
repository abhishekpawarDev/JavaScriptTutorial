// Array Method

let arr = [12, 45, 25, 45, 55, 85, 45];

let b = arr.toString();
//Convert array to nstring

console.log(b);
console.log(typeof b);

//JOIN METHOD
let c = arr.join(" and ");
console.log(c);
console.log(typeof c);

// push method is used to remove last value in array
arr.push();
console.log(arr);
// pop method is used to add value in last
arr.pop(56);
console.log(arr);
// shift method is used to remove beginer value in array
arr.shift();
console.log(arr);
// unshift method is used to add value in beginer
arr.unshift("Abhishek");
console.log(arr);

//The Usage of delete operator
let num = [10, 20, 30, 40, 50, 60];

console.log(num);
console.log(num.length);
// Array lenghth not be changed after using delete operator
delete num[0];
console.log(num);
console.log(num.length);

// Concat Method
//Basically the concat method is used to add two or more array
let a1 = [1, 5, 9];
console.log(a1);
let a2 = [11, 15, 19];
console.log(a2);
let a3 = [21, 25, 29];
console.log(a3);
let newarr = a1.concat(a2, a3);
console.log(newarr);

// SORT METHOD

let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits);

fruits.sort();

console.log(fruits);

// Reverse function

fruits.reverse();
console.log(fruits);

// MOST IMPROTANT AND COMPLICATED METHOD

let comparray = [1010, 2021, 3031, 4041, 5051, 6061, 7070, 8081, 9091];

console.log(comparray);

comparray.splice(2, 2, 9091, 8087, 7536);

console.log(comparray);

// slice method

let comparray2 = [159, 987, 741, 123, 369, 654];

console.log(comparray2);

let ncomparray3 = comparray2.slice(3);

console.log(comparray3);

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(1, 3);
// citrus contains ['Orange', 'Lemon']
