const trainees = [
  { name: "Karma", vertical: "Dev" },
  { name: "Sonam", vertical: "QA" },
  { name: "Tshering", vertical: "Dev" },
  { name: "Pema", vertical: "BA" }
];

const devs = trainees.filter(trainee => trainee.vertical === "Dev");
console.log(devs);