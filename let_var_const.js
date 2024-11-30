const { log } = require("console");

console.log("Let , Var And Const");

let a = "Point A";
console.log(a);

// let a = "Point B"
// console.log(A)
// --------> This will throw an error

{
  let a = "This element inside in block";
  console.log(a);
  // --------> Thats reason let is blocked level element
}
console.log(a);

a = "Point B";
console.log(a);

// --------> This will not throw error

// Now Using Var

var v = "Universe";
console.log(v);
var v = "Universe 2 ";
console.log(v);
// ----------> This will not throw error

// Now Using Const

const c = "const";
console.log(c);

// ---->Const Variable Not Change the value

// c = "const 2";
// console.log(c);
// --------> This will throw an error

// ------> Const variable not change the value
