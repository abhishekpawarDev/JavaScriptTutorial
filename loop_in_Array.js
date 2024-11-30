// Loops in array

// ForLoop
let batsman = [
    "R Sharma",
    "S Dhawan", 
    "V Kohli",
    "KL Rahul;",
    "H Pandya",
    "MS Dhoni",
  ];
  
  for (i = 0; i < batsman.length; i++) {
    console.log(batsman[i]);
  }
  
  // for each loop
  
  let num = [144, 156, 148, 125, 175, 169, 159];
  
  num.forEach((element) => {
    console.log(element);
  });
  
  // USAGE OF ARRAY FROM
  
  let name = "Rohit";
  let arr = Array.from(name);
  console.log(arr);
  
  // FOR OF LOOP
  
  let ballers = ["M Shami", "J Bumrah", "A Singh", "K Yadav", "H Pandya"];
  
  for (let i of ballers) {
    console.log(i);
  }
  
  // For In Loop
  
  let kabaddi_player = [
    "Manjeet Chiller",
    "mahinder Rajput",
    "Pardeep Narwal",
    "Anup Kumar",
  ];
  
  for (let i in kabaddi_player) {
    console.log(i);
  }
  
  for (let i in kabaddi_player) {
    console.log(kabaddi_player[i]);
  }
  