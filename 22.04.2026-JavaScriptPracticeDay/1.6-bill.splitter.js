function splitBill(total, people, tipPercent)
{
    const tipAmount = total * (tipPercent / 100);
    const totalWithTip = total + tipAmount;
    const split = totalWithTip / people;

    return split.toFixed(2);
} 
console.log(splitBill(1000, 4, 10))
console.log(splitBill(500, 2, 10));
console.log(splitBill(1200, 3, 15));
console.log(splitBill(600, 5, 0));