

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi! I am ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }

};

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription()
    return 'testing'
  }
}

class Traveler extends Person {
  constructor(name, age, hometown){
    super(name, age);
    this.hometown = hometown;
  }

  hasHometown(){
    return !!this.hometown
  }


  getGreeting(){
    let greeting = super.getGreeting()
    return this.hasHometown() ? `${greeting} I am from ${this.hometown}` : `${greeting}`;
  }
}

const me = new Traveler('Kendrick', 27, 'Oak Park, MI');
console.log(me);
console.log(me.getGreeting());


const you = new Traveler();
console.log(you.getGreeting());
