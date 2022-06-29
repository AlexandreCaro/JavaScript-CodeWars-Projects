function perimeter(n) {
  
    let fibonacci = function(number){
        
        let prev = 1; let curr = 1;
        
        let memory = curr;
      
        let somme = 2;
        
        let k = 2;
        
        while(k<number){
          memory = curr;
          curr = prev + curr;
          somme += curr;
          prev = memory;
          k++;
        }
        
        return somme;
      
      }
    
    if(n===0) return 4;
    
    return fibonacci(n+1)*4;
      
    }

describe("Basic tests",function() {
    it("Small numbers",function() {
        Test.assertEquals(perimeter(0), 4)
        Test.assertEquals(perimeter(5), 80)
        Test.assertEquals(perimeter(7), 216)
        Test.assertEquals(perimeter(20), 114624)
        Test.assertEquals(perimeter(30), 14098308)
    })})