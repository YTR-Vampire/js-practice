const trainees = [
  { name: "Karma", status: "Active" },
  { name: "Sonam", status: "Passive" },
  { name: "Tshering", status: "Active" },
  { name: "Pema", status: "Withdrawn" }
];
const result = trainees
.filter(trainee => trainee.status === "Active")
.map(trainee => trainee.name)
.sort();

console.log(result); 