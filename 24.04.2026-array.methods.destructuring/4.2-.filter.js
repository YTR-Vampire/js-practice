const trainees = [
  { name: "Karma", age: 24 },
  { name: "Dorji", age: 28 },
  { name: "Sonam", age: 22 },
  { name: "Pema", age: 31 }
];

const adults = trainees.filter(trainee => trainee.age >= 25);

console.log(adults);