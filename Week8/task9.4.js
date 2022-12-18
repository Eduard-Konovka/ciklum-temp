const successedPromise = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Successed");
    }),
      100;
  });
};

const failedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Failed"));
      // throw new Error("Failed");
    }),
      100;
  });
};

const asyncFunc = async (fn) => {
  let message;

  await fn()
    .then(function (data) {
      message = data;
    })
    .catch((error) => {
      throw error;
    });

  try {
    return message;
  } catch (error) {
    return error;
  }
};

//

const visualize = async (cb) => {
  const result = await asyncFunc(cb);
  console.log(result);
};

visualize(successedPromise);
visualize(failedPromise);
