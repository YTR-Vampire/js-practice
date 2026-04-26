const trainees = [
  { name: "Karma", vertical: "Dev" },
  { name: "Dorji", vertical: "QA" },
  { name: "Sonam", vertical: "BA" }
];
 /**
 * @param {Array} trainees
 * @param {string} name
 * @returns {Object|undefined}
 */
function findByName(trainees, name) {
  return trainees.find(trainee => trainee.name === name);
}

console.log(findByName(trainees, "Dorji"));
console.log(findByName(trainees, "Pema"));