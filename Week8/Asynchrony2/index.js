function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}

setTimeout(function () {
  myFunction("Hello!");
}, 3000);

let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Boo!");
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById("promise").innerHTML = value;
});

let myNewPromise = new Promise(function (resolve, reject) {
  resolve(2);
});

myNewPromise
  .then(function (result) {
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
  });
