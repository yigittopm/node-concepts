var assert = require("assert");

describe("Array", function () {
  describe("#indexOf()", () => {
    it("Değer mevcut değilse -1 döndürmelidir", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
