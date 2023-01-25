let assert = require("assert");

function multiply(a, b) {
  return a * b;
}

describe("multiply positive", function () {
  it("multiply 2 on 3", function () {
    assert.equal(multiply(2, 3), 6);
  });
  it("multiply 4 on 4", function () {
    assert.equal(multiply(4, 4), 16);
  });
});

describe("multiply negative", function () {
  it("multiply 2 on a", function () {
    assert.equal(multiply(2, "a"), NaN);
  });
  it("multiply a", function () {
    assert.equal(multiply(2), NaN);
  });
});
