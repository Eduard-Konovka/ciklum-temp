const successedPromise = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("Successed");
    }, 100)
  );
};

const failedPromise = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      reject("Failed");
    }, 150)
  );
};

const asyncFunc = async (fn) => {
  try {
    return await fn();
  } catch (error) {
    throw Error(error);
  }
};

// для проверки ======================
const visualize = async (cb) => {
  const result = await asyncFunc(cb);
  console.log(result);
};

visualize(successedPromise);
visualize(failedPromise);
// ===================================
