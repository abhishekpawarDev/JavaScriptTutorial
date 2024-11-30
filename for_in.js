//LOOPS IN JAVA SCRIPT

// FOR IN LOOP

const obj = {
  std_name: "Abhishek Pawar",
  std_class: "BCA",
  std_rollno: 23341,
  CGPA: 6.8,
};

for (let b in obj) {
  console.log(b);
}

for (let b in obj) {
  console.log(b + "---->" + obj[b]);
}
