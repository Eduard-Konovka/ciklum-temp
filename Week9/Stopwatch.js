let counter = 0;

var intervalID = setInterval(() => {
  if (counter === 10) {
    clearInterval(intervalID);
    return;
  }

  ++counter;

  console.log(`${counter} seconds`);
}, 1000);
