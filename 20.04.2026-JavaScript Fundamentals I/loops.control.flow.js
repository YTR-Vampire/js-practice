for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

const getGrade = (score) => {
  if (score >= 90) {return "Excellent";}
  else if (score >= 70) {return "Good";}
  else {return "Keep going";}
}

console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(55));

let num = 1;
while (num <= 1000) {
  console.log(num);
  num = num * 2;
}