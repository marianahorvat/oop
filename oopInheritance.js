class Person {
  constructor (name, quirkyFact){
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio(){
    return `My name is ${this.name} and here is my quirky fact: ${this.quirkyFact}`;
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort){
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  // specific to mentors
  isOnShift(){
    this.onShift = true;
  }
  isOffShift(){
    this.onShift = false;
  }
}


let student = new Student("John", "I like learning");
console.log(student.bio());
student.enroll("April 1st, 2018");
console.log(student);

let mentor = new Mentor("Mary", "I like teaching");
mentor.isOnShift();
console.log(mentor);
