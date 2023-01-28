export function moveUnitToFirstPoint(unit) {
  // ========== Початок зони редагування ===============
  for (let i = 0; i < 3; i++) {
    unit.moveUp();
  }
  for (let i = 0; i < 4; i++) {
    unit.moveRight();
  }
  // ========== Кінець зони редагування ===============

  return {
    x: unit.getValueX,
    y: unit.getValueY,
  };
}

export function moveUnitToSecondPoint(unit) {
  // ========== Початок зони редагування ===============
  for (let i = 0; i < 6; i++) {
    unit.moveDown();
  }
  for (let i = 0; i < 2; i++) {
    unit.moveRight();
  }
  // ========== Кінець зони редагування ===============
  return {
    x: unit.getValueX,
    y: unit.getValueY,
  };
}
