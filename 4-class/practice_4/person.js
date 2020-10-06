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
    return this.basic_introduce();
  }

  // eslint-disable-next-line
  basic_introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}

export default Person;
