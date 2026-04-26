const response = {
  id: 42,
  name: "Karma"
};

const email = response.contact ?.email ?? "no email";
console.log(email);
