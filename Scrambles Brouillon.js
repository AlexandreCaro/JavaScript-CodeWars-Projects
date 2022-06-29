function scramble(str1, str2) {
  
    let listStr1 = str1.split("");
    let listStr2 = str2.split("");
    
    function count(string){
      var count = {};
      
      string.split("").forEach(function(s){
        count[s] ? count[s]++ : count[s]=1;
      });
      
      return count;
    }
    
    /*
   
    for(let letter of listStr2){
      if(listStr1.includes(letter)===false) return false;
      
      else if (listStr1.includes(letter)===true) {
        listStr1.splice(listStr1.indexOf(letter),1);
      }
    }
    
    */
    
    const count1 = count(str1);
    const count2 = count(str2);
    
    for (let element of Object.getOwnPropertyNames(count2)){
      if(count1.hasOwnProperty(element)===false) return false;
      if (count1[element] < count2[element]) return false;
    }
    
    return true;
  }

  function scramble(str1, str2) {
  
    function compare([...a], [...b]) {
      a.sort();
      return b.sort().every((i => v => {
          while (i < a.length && a[i] !== v) i++;
          return a[i++] === v;
      })(0));
  }
    
    return compare(str1, str2);
    
  }

  function scramble(target, source) {
  
    if(target.length < 50 && source.length < 50){
      function compare([...a], [...b]) {
        a.sort();
        return b.sort().every((i => v => {
            while (i < a.length && a[i] !== v) i++;
            return a[i++] === v;
        })(0));
    }
      
      return compare(target, source);
      
    }
    
    var ntarget = target.length, nsource = source.length;
    if (ntarget <= nsource) {
      // compile the target
      var charhash = {};
      for (var i = 0; i < ntarget; ++i) {
        var c = target[i];
        charhash[c] = (charhash[c] || 0) + 1;
      }
  
      // decompile the target
      for (var i = 0; i < nsource && ntarget > 0; ++i) {
        var c = source[i];
        if (charhash[c]) {
          --charhash[c];
          --ntarget;
        }
      }
    }
    return ntarget == 0;
    
  }