// Prototype

function User(name, age, country, phoneNumber) {
  this.name = name;
  this.age = age;
  this.country = country;
  this.phoneNumber = phoneNumber;
}

User.prototype.getSummary = function () {
  return `Hi! My name is ${this.name} and my age is ${this.age}. I live in ${this.country} and my phone number is ${this.phoneNumber}, so you can call me anytime to chat! Thanks.`;
};

User.prototype.getEmail = function () {
  return `${this.name}@gmail.com`;
};

User.prototype.changeName = function (newName) {
  this.name = newName;
  this.changeName = true;
};

// Assign the value
const user1 = new User('John', 10, 'Marroco', '082812812821');
const user2 = new User('Doe', 12, 'Maldive', '022212812821');

// Print the value
console.log(user1);
console.log(user1.getSummary());
console.log(user1.getEmail());

// Change name
user1.changeName('David');
console.log(user1);
console.log(user1.getSummary());
console.log(user1.getEmail());
