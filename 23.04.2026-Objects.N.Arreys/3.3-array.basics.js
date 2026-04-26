const cities = ["Gelephu", "Thimphu", "Paro"];
console.log(cities);

cities.push("Punakha");
console.log(cities);

cities.splice(1, 1);
console.log("Thimphu removed:", cities);

const paroIndex = cities.indexOf("Paro");
console.log("Paro Index:", paroIndex);

const hasBumthang = cities.includes("Bumthang");
console.log("Bumthang listed?", hasBumthang);