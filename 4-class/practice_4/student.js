import Person from './person';

class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.myklass = klass;
  }

  get klass() {
    return this.myklass;
  }

  introduce() {
    return `${super.basic_introduce()} I am a Student. I am at Class ${this.myklass}.`;
  }
}

export default Student;
