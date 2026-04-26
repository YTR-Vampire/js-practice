const trainees = [
  { name: "Karma", vertical: "Dev", score: 83 },
  { name: "Dorji", vertical: "Dev", score: 88 },
  { name: "Sonam", vertical: "QA", score: 77 },
  { name: "Pema", vertical: "BA", score: 90 },
  { name: "Tshering", vertical: "QA", score: 75 },
  { name: "Ugyen", vertical: "Dev", score: 86 },
  { name: "Tandin", vertical: "BA", score: 82 },
  { name: "Yangchen", vertical: "Dev", score: 92 },
  { name: "Kinley", vertical: "QA", score: 72 },
  { name: "Choden", vertical: "BA", score: 84 }
];

const topThree = [...trainees]
  .sort((a, b) => b.score - a.score)
  .slice(0, 3);

const medals = ["🥇", "🥈", "🥉"];

topThree.forEach((trainee, index) => {
  console.log(`${medals[index]} ${trainee.name} (${trainee.vertical}) — ${trainee.score}`);
});