const obj = {
  subOptimal: function () {
    // оптимізуйте код нижче таким чином, щоб уникнути дублювання завдяки використання функції reverseString
    // будь-ласка, вносіть зміни тільки в межах, позначених лініями
    // !! ВАЖЛИВО: Виклик reverseString здійснюйте за допомогою this: this.reverseString

    const strings = ["abcd", "karamba", "racecar"];

    // ========== Початок зони редагування ==============
    const result = [];

    for (let i = 0; i < strings.length; i++) {
      result.push(this.reverseString(strings[i]));
    }

    return result;
    // ========== Кінець зони редагування ===============
  },

  reverseString: function (str) {
    // ========== Початок зони редагування ==============
    const arr = str.split("");
    const buffer = [];

    for (let i = arr.length; i >= 0; i--) {
      buffer.push(arr[i]);
    }

    return buffer.join("");
    // ========== Кінець зони редагування ===============
  },
};

console.log(obj.subOptimal());
