const chai = require("chai");
const {assert} = chai;
require("util").inspect.defaultOptions.depth = null;
chai.config.truncateThreshold = 0;

describe("withdraw", () => {
  it("should handle 40", () => {
    assert.deepEqual(withdraw(40), [0, 0, 2]);
  });

  it("should handle 60", () => {
    assert.deepEqual(withdraw(60), [0, 0, 3]);
  });

  it("should handle 230", () => {
    assert.deepEqual(withdraw(230), [1, 1, 4]);
  });

  it("should handle 250", () => {
    assert.deepEqual(withdraw(250), [2, 1, 0]);
  });

  it("should handle 260", () => {
    assert.deepEqual(withdraw(260), [2, 0, 3]);
  });
});
