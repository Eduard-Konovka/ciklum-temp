function createPromise(shouldFail = false) {
  // ========== Початок зони редагування ===============
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldFail) {
        resolve({ message: "success" });
      } else {
        reject(new Error("error"));
      }
    }),
      100;
  });
  // ========== Кінець зони редагування ===============
}

function handlePromise(mainAction, onSuccess, onError) {
  // ========== Початок зони редагування ===============
  mainAction()
    .then((data) => onSuccess(data))
    .catch((error) => onError(error));
  // ========== Кінець зони редагування ===============
}

function onSuccess(res) {
  console.log(res);
}

function onError(err) {
  console.log(err);
}

handlePromise(createPromise, onSuccess, onError);
handlePromise(() => createPromise(true), onSuccess, onError);
