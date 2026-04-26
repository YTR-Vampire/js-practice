const sum = (amounts) => 
{
  return amounts.reduce((total, amount) => total + amount, 0);
};

console.log(sum([100, 200, 350, 75]));
console.log(sum([])); 