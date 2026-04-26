const sortAscending = (nums) => {

  return [...nums].sort((a, b) => a - b);
};
console.log(sortAscending([10, 2, 5, 1, 30]));
console.log(sortAscending([-3, -10, -1]));
console.log(sortAscending([7]));