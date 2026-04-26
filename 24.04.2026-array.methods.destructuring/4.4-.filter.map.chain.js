const trainees = [
  { name: "Karma", vertical: "Dev" },
  { name: "Dorji", vertical: "QA" },
  { name: "Sonam", vertical: "Dev" },
  { name: "Pema", vertical: "BA" }
];

const devNames = trainees
  .filter(trainee => trainee.vertical === "Dev")
  .map(trainee => trainee.name);

console.log(devNames);