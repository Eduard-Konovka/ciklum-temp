// 3 --------------------------------------------------------------------------
function fn() {
  let a = "value";
  return a;
}

console.log(fn());
// ============================================================================

// 5 --------------------------------------------------------------------------
// callMe("whatever");
const callMe = function (str) {
  console.log(str + "!");
};
// ============================================================================

// 6 --------------------------------------------------------------------------
let age = 25;

logAge(age);
console.log(age);

function logAge(years) {
  age = 42;
  console.log(years);
}
// ============================================================================

// 9 --------------------------------------------------------------------------
const obj_1 = {
  fn1() {
    console.log("fn1", this);
  },

  fn11(context) {
    console.log("fn11", context);
  },
};

const obj_2 = {
  fn2() {
    obj_1.fn1();
    obj_1.fn11(this);
  },
  fn22: obj_1.fn1(),
};

obj_2.fn2();
obj_2.fn22;
obj_1.fn1();
obj_1.fn11(this);
// ============================================================================

// 10 -------------------------------------------------------------------------
const obj1 = {
  name: "object1",
  doSmth: function () {
    console.log(this.name);
  },
};

const obj2 = {
  name: "object2",
  fn: obj1.doSmth,
};

obj2.fn();
obj1.doSmth();
// ============================================================================

// 11 -------------------------------------------------------------------------
const removeColor = function () {
  const select = document.getElementById("colorSelect");
  const selectedOption = select.querySelector("option:checked");

  select.removeChild(selectedOption);
};
// ============================================================================

// 12 -------------------------------------------------------------------------
const root = document.getElementById("root");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

root.addEventListener("click", (e) => console.log("Root"), { capture: true });
parent.addEventListener("click", (e) => console.log("Parent"), {
  capture: true,
});
child.addEventListener("click", (e) => console.log("Child"), { capture: true });
// ============================================================================

// 13 -------------------------------------------------------------------------
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hi, there! My name is ${this.firstName}`);
  }
}

// Опис класу Student, який наслідує клас Person
class Student extends Person {
  constructor(firstName, lastName, profession) {
    super(firstName, lastName);

    this.profession = profession;
  }

  greetPlus() {
    console.log(
      `Hi, there! My name is ${this.firstName}, my profession is ${this.profession}`
    );
  }
}

const student = new Student("John", "Doe", "Web development");

student.greet();
student.greetPlus();
// ============================================================================

// 14 -------------------------------------------------------------------------
class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hi, there! My name is ${this.firstName}`);
  }
}

class Student2 extends Person2 {
  constructor(firstName, lastName, profession) {
    super(firstName, lastName);

    this.profession = profession;
  }

  greet() {
    console.log(
      `Hi, there! My name is ${this.firstName}. I am a ${this.profession}`
    );
  }
}

const student2 = new Student2("Joey", "Tribbiani", "student");

student2.greet();
// ============================================================================
