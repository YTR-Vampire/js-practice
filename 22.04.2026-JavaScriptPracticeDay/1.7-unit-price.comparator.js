function cheaperPerUnit(priceA, qtyA, priceB, qtyB)
{
    const unitPriceA = priceA / qtyA;
    const unitPriceB = priceB / qtyB;

    if (unitPriceA < unitPriceB) {return "A";}
    else if (unitPriceB < unitPriceA) {return "B";}
    else {return "same";}
}

console.log(cheaperPerUnit(100, 2, 120, 3));
console.log(cheaperPerUnit(60, 3, 100, 4));
console.log(cheaperPerUnit(50, 1, 100, 2));