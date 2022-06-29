function productFib(prod){
  
    let fibonacci = function(number){
      
      let prev = 1; let curr = 1;
      
      let memory = curr;
      
      let k = 2;
      
      while(k<number){
        memory = curr;
        curr = prev + curr;
        prev = memory;
        k++;
      }
      
      return curr;
    
    }
    
    let counter = 2;
    
    while (fibonacci(counter)*fibonacci(counter-1)<prod){
      counter++;
    }
    if (fibonacci(counter)*fibonacci(counter-1)===prod) return [fibonacci(counter-1), fibonacci(counter), true];
    
    return [fibonacci(counter-1), fibonacci(counter), false];
  }

  describe("Tests", () => {
    it("test", () => {
  Test.assertSimilar(productFib(4895), [55, 89, true])
  Test.assertSimilar(productFib(5895), [89, 144, false])
  Test.assertSimilar(productFib(74049690), [6765, 10946, true])
  Test.assertSimilar(productFib(84049690), [10946, 17711, false])
  Test.assertSimilar(productFib(193864606), [10946, 17711, true])
  Test.assertSimilar(productFib(447577), [610, 987, false])
  Test.assertSimilar(productFib(602070), [610, 987, true])
  
    });
  });