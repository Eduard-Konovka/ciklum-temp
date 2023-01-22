export function reduce(array, callback, initialValue) {
  let result;

  array.forEach((value) => {
    result = initialValue + value;
  });

  return result;
}
