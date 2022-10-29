function User(name, age, country, phoneNumber) {
  this.name = name;
  this.age = age;
  this.country = country;
  this.phoneNumber = phoneNumber;
}

User.prototype.getSummary = function () {
  return `Hi! My name is ${this.name} and my age is ${this.age}. I live in ${this.country} and my phone number is ${this.phoneNumber}, so you can call me anytime to chat! Thanks.`;
};

// Inheritance
function Password(name, age, country, phoneNumber, password) {
  User.call(this, name, age, country, phoneNumber);

  this.password = password;
}

// Inherit User prototype - Get access all the User prototype
Password.prototype = Object.create(User.prototype);

// Instantiate Password Object
const userWithPassword = new Password(
  'Steve',
  30,
  'Brazil',
  '012910920920',
  'itsasecret'
);

// Use Password constructor
Password.prototype.constructor = Password;

console.log(userWithPassword);
