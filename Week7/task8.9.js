class Fish {
  // ========== Початок зони редагування ===============
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  swim() {}
  // ========== Кінець зони редагування ===============
}

class Shark extends Fish {
  // ========== Початок зони редагування ===============
  constructor(name, size, isDangerous) {
    super(name, size);
    this.isDangerous = isDangerous;
  }

  attack() {}
  // ========== Кінець зони редагування ===============
}
