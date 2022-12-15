console.log(1);

setTimeout(function () {
  console.log(2);
}, 1000);

setTimeout(function () {
  console.log(3);
}, 0);

console.log(4);

Promise.resolve().then(() => {
  console.log("a");
  Promise.resolve().then(() => console.log("b"));
});

console.log("c");

Promise.resolve().then(() => console.log(5));
