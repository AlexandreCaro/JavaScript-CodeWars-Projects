function sumDigPow(a, b) {
  
    let property = function(number){
      
      let liste = number.toString().split("")
      
      let somme = 0;
      
      for (let i=0; i< liste.length; i++){
        somme += liste[i]**(i+1)
      }
      
      if (somme===number) return true;
      
      return false;
      
    }
    
    const range = (min, max) => [...Array(max-min+1).keys()].map(i => i+min);
    
    let liste_range = range(a, b);
    
    return liste_range.filter(number => property(number));
  
  }

  // Tests

  describe("Example Tests", function() {
    Test.assertSimilar(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
    Test.assertSimilar(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
    Test.assertSimilar(sumDigPow(10, 100),  [89])
    Test.assertSimilar(sumDigPow(90, 100), [])
    Test.assertSimilar(sumDigPow(90, 150), [135])
    Test.assertSimilar(sumDigPow(50, 150), [89, 135])
    Test.assertSimilar(sumDigPow(10, 150), [89, 135])
  });

  function sumDigPow_cor(a, b) {
    var ans = [];
    while(a <= b){
      if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
        ans.push(a);
      a++;
    }
    return ans;
  }