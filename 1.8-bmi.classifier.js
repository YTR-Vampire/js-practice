// Write classifyBMI(weightKg, heightM) that computes Body Mass Index (weight / height²) and returns a category.

const classifyBMI = (weightKg, heightM) =>
{
    const bmi = weightKg / (heightM * heightM);
    if (bmi < 18.5) {return "Underweight";}
    else if (bmi >= 18.5 && bmi < 24.9) {return "Normal";}
    else if (bmi >= 25.00 && bmi < 29.9) {return "Overweight";}
    else {return "Obese";} 
};

console.log(classifyBMI(40, 1.70));
console.log(classifyBMI(55, 1.70));
console.log(classifyBMI(95, 1.75));
console.log(classifyBMI(65, 1.60));