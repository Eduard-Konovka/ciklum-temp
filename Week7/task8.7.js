const person = {
  name: "Petro",
  age: 35,
  gender: "male",
  education: "university",
  occupation: "developer",
  isAdmin: true,
  process: function () {
    return processPerson(this);
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
    return processPerson(this);
  },
};

function processPerson(context) {
  if (context && typeof context === "object") {
    const genders = {
      male: "Чоловік",
      female: "Жінка",
    };

    let summary = "Інформація про особу: \n";

    summary += genders[context.gender] || "Особа невідомої статі";
    summary += " " + context.name;
    summary += " віком " + context.age + " роки(-ів)";
    summary += " має освіту на рівні " + context.education;
    summary += " та працює на посаді " + context.occupation + ".";

    if (context.isAdmin) {
      summary += " Є адміністратором.";
    }

    return summary;
  }

  throw new Error("Очікується об'єкт");
}

console.log(processPerson(person));
console.log(person.process());
console.log(person1.process());
