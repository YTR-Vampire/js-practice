const trainee = {
  name: "Karma",
  vertical: "Dev",
  
  introduce() {
    return `Hi, I'm ${this.name}, training in ${this.vertical}.`;
  }
};

console.log(trainee.introduce());