const person = {
  name: "Petro",
  age: 35,
  gender: "male",
  education: "university",
  occupation: "developer",
  isAdmin: true,
  process: function () {
    return processPerson.call(this);
  },
};

const person1 = {
  name: "Jane",
  age: 37,
  gender: "female",
  education: "college",
  occupation: "designer",
  isAdmin: false,
  process: function () {
    return processPerson.call(this);
  },
};

function processPerson() {
  if (this && typeof this === "object") {
    const genders = {
      male: "Чоловік",
      female: "Жінка",
    };

    let summary = "Інформація про особу: \n";

    summary += genders[this.gender] || "Особа невідомої статі";
    summary += " " + this.name;
    summary += " віком " + this.age + " роки(-ів)";
    summary += " має освіту на рівні " + this.education;
    summary += " та працює на посаді " + this.occupation + ".";

    if (this.isAdmin) {
      summary += " Є адміністратором.";
    }

    return summary;
  }

  throw new Error("Очікується об'єкт");
}

console.log(person.process());
console.log(person1.process());
