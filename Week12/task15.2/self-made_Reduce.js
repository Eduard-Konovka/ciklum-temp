/**
 * reduce своими руками
 *
 * 1. Функция принимает три аргумента: массив, callback-функцию, начальное значение.
 *
 * 2. После каждой итерации в промежуточное значение перезаписывается значением,
 * полученным в результате выполнения callback-функции.
 *
 * 3. callback-функция принимает четыре аргумента: промежуточное значение,
 * текущий элемент массива, индекс элемента, ссылка на сам массив.
 *
 * 4. Явно указать значение this нельзя, поэтому вместо введения в функцию
 * ещё одного аргумента thisArg мы просто передаём null в вызов функции.
 */

function reduce(array, callback, initialValue) {
  let i;
  let length = array.length;
  let result = initialValue;

  for (i = 0; i < length; i = i + 1) {
    result = callback.call(null, result, array[i], i, array);
  }

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
