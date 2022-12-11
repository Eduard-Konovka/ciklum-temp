const firstPromise = Promise.resolve().then(() => {
  console.log("firstPromise");

  const secondTimer = setTimeout(() => console.log("secondTimer"), 0);
});

const firstTimer = setTimeout(() => {
  console.log("firstTimer");

  const secondPromise = Promise.resolve().then(() =>
    console.log("secondPromise")
  );
}, 0);

console.log("Start");
