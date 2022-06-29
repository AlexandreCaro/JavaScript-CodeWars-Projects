Array.prototype.sameStructureAs = function (other) {
  
    if(isArray(other)===false) return false;
    
    const isGood = function(array1, array2){
      
      if(array1.length !== array2.length) return false;
      
      for (let i=0; i < array1.length; i++){
        if(isArray(array1[i]) && isArray(array2[i])===false) return false;
      }
      return true;
    }
    
    let names = Object.keys(this);
    
    let arrayThis = [], arrayOther = [];
    
    for (let i=0; i< this.length; i++){
      console.log(this[i], other[i]);
      if (isArray(this[i]) && isArray(other[i])===false) return false;
      if(isArray(this[i]) && isArray(other[i])){
        arrayThis = this[i], arrayOther = other[i];
        return isGood(arrayThis, arrayOther);
      }
    }
    
    return true;
      // Return 'true' if and only if 'other' has the same
      // nesting structure as 'this'.
  
      // Note: You are given a function isArray(o) that returns
      // whether its argument is an array.
  };

  // Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should test for something", function() {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
});

Array.prototype.sameStructureAs = function (other) {
    
    return (this.length === other.length) ? this.every(function(el, i){
      return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
    }) : false;
  };