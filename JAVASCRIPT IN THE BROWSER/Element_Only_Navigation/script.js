// ELEMENT ONLY NAVIGATION 

console.log(document.body.firstChild);
console.log(document.body.firstElementChild);


function color(){
    document.firstElementChild.style.background = "red";
}

let a = prompt("Enter red");

if(a == "red"){
    color();
}else{
    console.log("Invalid color");
} 