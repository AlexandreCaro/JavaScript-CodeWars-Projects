function zeros (n) {
  
    let number_5 = Math.floor(n/5);
    let number_25 = Math.floor(n/25);
    
    let number = number_5 + number_25;
    
    if (n>125){
      
      k = 3;
      
      while (Math.floor(n/(5**k))>0){
        number += Math.floor(n/(5**k));
        k++;
      }
    }
    
    return number;
  }

describe("Sample Tests", function() {
it("Should pass sample tests", function() {
    Test.assertEquals(zeros(0), 0, "Testing with n = 0")
    Test.assertEquals(zeros(5), 1, "Testing with n = 5")
    Test.assertEquals(zeros(6), 1, "Testing with n = 6")
    Test.assertEquals(zeros(30), 7, "Testing with n = 30")
});
});