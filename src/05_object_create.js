// Object of prototypes
const userPrototypes = {
  getSummary: function () {
    return `Hi! My name is ${this.name} and my age is ${this.age}. I live in ${this.country} and my phone number is ${this.phoneNumber}, so you can call me anytime to chat! Thanks.`;
  },
  getEmail: function () {
    return `${this.name}@gmail.com`;
  },
  changeName: function (newName) {
    this.name = newName;
    this.changeName = true;
  },
};

// Create object
const user1 = Object.create(userPrototypes, {
  name: { value: 'Tony Stark' },
  age: { value: 34 },
  country: { value: 'United States' },
  phoneNumber: { value: '212102910212' },
});

console.log(user1);
