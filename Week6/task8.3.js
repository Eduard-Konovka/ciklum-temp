const varA = 27;
const varB = 42;

// ========== Початок зони редагування ===============

const sumTotal = varA + varB; // змініть null на потрібний вираз;
const isVarAGreater = varA > varB; // змініть null на потрібний вираз;
const centModulo = (varA * 100) % varB; // змініть null на потрібний вираз;
const dualCondition = (isVarAGreater && centModulo) >= 24; // змініть null на потрібний вираз;
const concatToString = varA.toString() + varB.toString(); // змініть null на потрібний вираз;

// ========== Кінець зони редагування ===============

export {
  varA,
  varB,
  sumTotal,
  centModulo,
  dualCondition,
  isVarAGreater,
  concatToString,
};
