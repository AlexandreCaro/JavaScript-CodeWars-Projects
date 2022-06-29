function firstNonRepeatingLetter(s) {
  
    if (s==="") return "";
    
    let isUpper = /[A-Z]/g.test(s);
    
    let upperMatch = s.match(/[A-Z]/g);
    
    console.log(upperMatch);
    
    s = s.toLowerCase();
    
    let array = s.split("");
    
    let isUnique = function(arr, char){
      
      let compteur = 0;
      
      console.log("arr", arr);
      
      for (let element of arr){
        if (element===char){
          compteur++;
          if (compteur > 1) return false;
          }
      }
      
      return true;
    }
    
    let unique = array.filter(char => isUnique(array, char));
    
    console.log(unique);
    
    if(isUpper===true && upperMatch.includes(unique[0].toUpperCase())) return unique[0].toUpperCase();
    
    if(unique.length > 0) return unique[0];
    
    else if (unique.length===0) return "";
    
  }

  describe('Simple Tests', function() {
    it('should handle simple tests', function() {
      Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
      Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
      Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
    });
  });

function firstNonRepeatingLetter_cor1(s) {
    for(var i in s) {
        if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
        }
    }
    return '';
}

function firstNonRepeatingLetter_cor2(s) {
    var t=s.toLowerCase();
    for (var x=0;x<t.length;x++)
      if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
        return s[x];
    return "";
  }