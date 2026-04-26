const trainees = [
  { name: "Karma", vertical: "Dev" },
  { name: "Dorji", vertical: "QA" },
  { name: "Sonam", vertical: "BA" },
  { name: "Pema", vertical: "Dev" },
  { name: "Tshering", vertical: "QA" }
];
const devCount = trainees.filter(t => t.vertical === "Dev").length;
const qaCount = trainees.filter(t => t.vertical === "QA").length;
const baCount = trainees.filter(t => t.vertical === "BA").length;

console.log(`Dev: ${devCount}, QA: ${qaCount}, BA: ${baCount}`);