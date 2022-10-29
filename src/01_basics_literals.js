/**
 * Object Literals
 * * NOTE: An arrow function doesn't have its own this value and the arguments object.
 * * So you can't use this on arrow function () => {}
 * * You must use function() {}
 */

const user1 = {
  name: 'John',
  age: 20,
  country: 'Indonesia',
  phoneNumber: '08882828282',
  getDescription: function () {
    return `Hi! My name is ${this.name} and my age is ${this.age}. I live in ${this.country} and my phone number is ${this.phoneNumber}, so you can call me anytime to chat! Thanks.`;
  },
};

const user2 = {
  name: 'Dewi',
  age: 19,
  country: 'Singapore',
  phoneNumber: '0882228282',
  getDescription: function () {
    return `Hi! My name is ${this.name} and my age is ${this.age}. I live in ${this.country} and my phone number is ${this.phoneNumber}, so you can call me anytime to chat! Thanks.`;
  },
};

// Get user description values
console.log(user1.getDescription());
console.log(user2.getDescription());

// Get values and keys in the object
console.log(Object.values(user1));
console.log(Object.keys(user1));
