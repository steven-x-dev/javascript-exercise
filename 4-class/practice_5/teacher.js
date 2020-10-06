import Person from './person';

class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.myklass = klass;
  }

  get klass() {
    return this.myklass;
  }

  introduce() {
    return `${super.introduce()} I am a Teacher. I teach ${
      this.myklass ? `Class ${this.myklass}` : 'No Class'
    }.`;
  }
}

export default Teacher;
