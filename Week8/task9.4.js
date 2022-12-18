const successedPromise = async () => {
  return await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("Successed");
    }, 100)
  );
};

const failedPromise = async () => {
  return await new Promise((resolve, reject) =>
    setTimeout(() => {
      reject(new Error("Failed"));
    }, 100)
  );
};

const asyncFunc = async (fn) => {
  try {
    return await fn();
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
