class Wizard {
  constructor({ name, spell }) {
    this.name = name;
    this.spell = spell;
  }

  castSpell() {
    console.log(`${this.name} casts a spell: ${this.spell}`);
  }
}

const merlin = new Wizard({ name: "Merlin", spell: "Abracadabra!" });

export { Wizard, merlin };
