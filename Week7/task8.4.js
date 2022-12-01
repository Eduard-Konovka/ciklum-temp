function conditionFunc(firstParam, secondParam) {
  let result = null;

  // ========== Початок зони редагування ==============
  firstParam === "JavaScript" && secondParam >= 7 && secondParam < 16
    ? (result = "Prometheus")
    : firstParam !== "JavaScript" && secondParam === 10
    ? (result = 42)
    : firstParam === "JavaScript" && secondParam >= 16
    ? (result = "Developer")
    : firstParam !== "JavaScript" && secondParam >= 16
    ? (result = "else")
    : null;
  // ========== Кінець зони редагування ===============

  return result;
}

console.log(conditionFunc("JavaScript", 7)); // JavaScript
console.log(conditionFunc("NoJavaScript", 10)); // 42
console.log(conditionFunc("JavaScript", 16)); // Developer
console.log(conditionFunc("NoJavaScript", 16)); // else
console.log(conditionFunc("JavaScript", 1)); // null
