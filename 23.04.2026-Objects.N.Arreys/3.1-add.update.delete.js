const trainee =
{
  name: "Karma",
  age: 24,
  city: "Gelephu",
  vertical: "QA"
};

trainee.vertical = "Dev";

trainee.email = "karma@selisegroup.com";

delete trainee.city;

console.log(trainee);