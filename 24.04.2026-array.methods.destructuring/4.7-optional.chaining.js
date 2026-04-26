const getEmail = (user) => 
    {
  return user.contact?.email;
};
const user1 = 
{ 
  name: "Karma", 
  contact: { email: "karma@selisegroup.com" } 
};
console.log(getEmail(user1)); 

const user2 = { 
  name: "Dorji" 
};
console.log(getEmail(user2));