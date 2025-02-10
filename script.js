// Base class Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display basic info
  getInfo() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Student class extending Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  // Method specific to Student
  getGrade() {
    return `${this.name} is in grade ${this.grade}.`;
  }
}

// Teacher class extending Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method specific to Teacher
  getSubject() {
    return `${this.name} teaches ${this.subject}.`;
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

