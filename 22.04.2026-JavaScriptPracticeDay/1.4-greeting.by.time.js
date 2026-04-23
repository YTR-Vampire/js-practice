const greet = (name, hour) =>
{
    let greeting;
    if (hour >= 1 && hour < 12) {greeting = "Good Morning";}
    else if (hour >= 12 && hour < 17) {greeting = "Good Afternoon";}
    else if (hour >= 18 && hour < 23) {greeting = "Good Evening";}
    return `${greeting}, ${name}!`;
};

console.log(greet("Karma", 9));
console.log(greet("Dorji", 14));
console.log(greet("Sonam", 20));