function generateNumbers(n, m) {
  let result = null;
  // ========== Початок зони редагування ==============
  const arr = [];

  for (let i = n; i < m + 1; i++) {
    arr.push(i);
  }

  result = arr.toString();
  // ========== Кінець зони редагування ===============
  return result;
}

function sumNumbers(n, m) {
  let result = null;
  // ========== Початок зони редагування ==============
  result = 0;

  for (let i = n; i < m + 1; i++) {
    result = result + i;
  }
  // ========== Кінець зони редагування ===============
  return result;
}

console.log(generateNumbers(2, 6));
console.log(sumNumbers(2, 7));
