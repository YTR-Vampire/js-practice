const getGrade = (score) =>
{
    if (score >= 90) {return "A";}
    else if (score >= 75 && score <= 89) {return "B";}
    else if (score >= 60 && score <= 74) {return "C";}
    else {return "F";}
};

console.log(getGrade(95));
console.log(getGrade(78));
console.log(getGrade(45));