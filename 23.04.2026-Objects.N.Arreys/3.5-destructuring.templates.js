const describe = ({ name, age, city, vertical }) => {
  return `${name}, ${age}, from ${city}, assigned to ${vertical}.`;
};

const traineeData = {
  name: "Karma",
  age: 25,
  city: "Gelephu",
  vertical: "Dev"
};

console.log(describe(traineeData));