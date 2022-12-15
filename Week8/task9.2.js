function createWrapper() {
  const params = arguments;
  const func = params[0];
  const callback = params[1];

  return function () {
    const props = arguments;

    if (Math.random() < 0.5) {
      callback("Error!");
    } else {
      callback(null, () => func(props));
    }
  };
}

function someFn() {
  console.log(arguments);
}

function cb(error, fn) {
  if (error) {
    console.error(error);
  } else {
    fn();
  }
}

createWrapper(someFn, cb)();
