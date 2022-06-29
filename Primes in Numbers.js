function primeFactors(n){
  
    let listeExponents = [];
    let listePrimes = [];
    
    let isPrime = function(number){
      
      for (let i=2, s=Math.sqrt(number); i < s; i++){
        if (number % i ==0) return false;
      }
      
    return number > 1;
    }
    
    let k = 0;
    
    let divisor = 2;
      
    while(n>2){
      
      if(isPrime(divisor)){
        
        if (n % divisor === 0){
          listePrimes.push(divisor);
          k = 1;
          while(n%(divisor**k)===0){
            k++;
          }
          if (k>1) k--;
          n = n / (divisor**k);
          listeExponents.push(k);
        }
        else divisor++;
      }
      else divisor++;
      
    }
    
    let string = "";
    
    let limit = listePrimes.length;
    
    let j = 0;
    
    while(j<limit){
      if (listeExponents[0]===1) string += "(" + listePrimes[0].toString() + ")";
      else string += "(" + listePrimes[0].toString() + "**" + listeExponents[0].toString() + ")";
      listePrimes.shift(); listeExponents.shift();
      j++;
    }
    
    return string;
    
  }

describe("Tests", () => {
    it("test", () => {
    Test.assertEquals(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")
    });
});
