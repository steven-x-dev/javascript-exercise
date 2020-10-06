import Person from './person';

class Worker extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.myklass = klass;
  }

  get klass() {
    return this.myklass;
  }

  // eslint-disable-next-line class-methods-use-this
  introduce() {
    return 'I am a Worker. I have a job.';
  }
}

export default Worker;
