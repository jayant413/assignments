let user = { name: "Jayant", email: "jayant@gmail.com" }
console.log(user)

user = JSON.stringify(user);

console.log(user)
user = JSON.parse(user);
console.log(user)