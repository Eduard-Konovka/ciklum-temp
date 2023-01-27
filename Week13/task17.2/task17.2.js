export function moveUnitToFirstPoint(unit) {
  // ========== Початок зони редагування ===============
  for (let i = 0; i < 3; i++) {
    unit.moveRight();
  }
  for (let i = 0; i < 4; i++) {
    unit.moveUp();
  }
  // ========== Кінець зони редагування ===============

  return {
    x: unit.getValueX,
    y: unit.getValueY,
  };
}

export function moveUnitToSecondPoint(unit) {
  // ========== Початок зони редагування ===============
  for (let i = 0; i < 7; i++) {
    unit.moveLeft();
  }
  for (let i = 0; i < 8; i++) {
    unit.moveDown();
  }
  // ========== Кінець зони редагування ===============
  return {
    x: unit.getValueX,
    y: unit.getValueY,
  };
}
