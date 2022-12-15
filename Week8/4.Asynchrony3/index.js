async function myAsyncFunction() {
  return "Hello";
}

myAsyncFunction().then(function (value) {
  console.log(value);
});
// або
myAsyncFunction().then((value) => console.log(value));

// ===========================================================================

function myTimedFunction() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Async Hello!"), 3000);
  });
}

async function promiseInAction() {
  const result = await myTimedFunction();
  console.log(result);
}

promiseInAction();

// ===========================================================================

let myErrorPromise1 = new Promise(function (resolve, reject) {
  //   resolve("Ok");
  throw new Error("Халепа!");
});
// або
let myErrorPromise2 = new Promise(function (resolve, reject) {
  //   resolve("Ok");
  reject("От халепа...");
});

myErrorPromise1.then(function (result) {
  console.log("result 1 ---> ", result);
});
myErrorPromise1.catch(function (error) {
  console.log("error 1 ---> ", error.message); // error.message
});

myErrorPromise2.then(function (result) {
  console.log("result 2 ---> ", result);
});
myErrorPromise2.catch(function (error) {
  console.log("error 2 ---> ", error); // error
});
