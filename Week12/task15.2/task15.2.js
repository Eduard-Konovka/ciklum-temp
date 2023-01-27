function reduce(array, callback, initialValue) {
  let result = initialValue;

  for (let i = 0; i < array.length; i = i + 1) {
    result = callback(result, array[i]);
  }

  // или
  // array.forEach((element) => {
  //   result = callback(result, element);
  // });

  return result;
}

function sum(acc, value) {
  return acc + value;
}

function mult(acc, value) {
  return acc * value;
}

console.log(reduce([1, 2, 3, 4], sum, 0));
console.log(reduce([1, 2, 3, 4], mult, 1));
