// Constructor ES6 - Class

class UserES6 {
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

const user3 = new UserES6('Angelina', 25, 'United States', '1213824829');

console.log(user3);
console.log(user3.getDescription());

// Another example using getter
class Velocity {
  constructor(v, t) {
    this.v = v;
    this.t = t;
  }

  // Getter
  get velocity() {
    return this.getVelocity();
  }

  // Method
  getVelocity() {
    return this.v / this.t;
  }
}

const averageVelocity = new Velocity(1000, 3600);

console.log('The average velocity are: ', averageVelocity.velocity);
