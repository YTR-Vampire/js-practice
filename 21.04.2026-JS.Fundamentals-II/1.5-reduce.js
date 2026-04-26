const cart = [
  { name: "Tea", price: 50, quantity: 2 },
  { name: "Rice", price: 200, quantity: 1 },
  { name: "Oil", price: 150, quantity: 3 }
];

const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(total);