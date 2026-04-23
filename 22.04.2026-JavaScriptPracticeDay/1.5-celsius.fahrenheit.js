const celsiusToFahrenheit = (celsius) => {return celsius * 9/5 + 32;};
const fahrenheitToCelsius = (fahrenheit) => {return (fahrenheit - 32) * 5/9;};      

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(212));