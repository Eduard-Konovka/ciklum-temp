function createWrapper() {
  // ========== Початок зони редагування ==============
  const func = arguments[0];
  const callback = arguments[1];

  return function () {
    try {
      callback(null, func(...arguments));
    } catch (error) {
      callback(error, null);
    }
  };
  // ========== Кінець зони редагування ===============
}

function fn(...theArgs) {
  setTimeout(() => {
    const arr = [];

    for (const arg of theArgs) {
      arr.push(arg);
    }

    console.log("Arguments ---> ", arr);
  }, 100);
}

function cb(error, fun) {
  if (error) {
    console.error("Error ---> ", error);
  } else {
    fun;
  }
}

createWrapper(fn(3, 5), cb);
