class Person {
  constructor(name, age) {
    this.myname = name;
    this.myage = age;
  }

  get name() {
    return this.myname;
  }

  get age() {
    return this.myage;
  }

  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}

export default Person;
