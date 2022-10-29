// Subclasses - Extends
class User {
  constructor(name, age, country, phoneNumber) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.phoneNumber = phoneNumber;
  }

  // Method -- Get the description
  getDescription() {
    return `Hi! My name is ${this.name} and my age is ${this.age}. I live in ${this.country} and my phone number is ${this.phoneNumber}, so you can call me anytime to chat! Thanks.`;
  }
}

// Password Subclass
class Password extends User {
  constructor(name, age, country, phoneNumber, password) {
    //* super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
    super(name, age, country, phoneNumber);

    this.password = password;
  }
}

const userWithPassword = new Password(
  'Henry',
  51,
  'Alaska',
  '21921029129',
  'itsasecret!'
);

console.log(userWithPassword);

// You can access User method while using subclasses
console.log(userWithPassword.getDescription());
