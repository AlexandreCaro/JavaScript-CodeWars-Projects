function simplify(poly){
  
    let array = poly.split(/[+|-]/g);
    
    let operators = poly.match(/[+|-]/g);
    
    let letters = poly.match(/[a-z]+/g);
    
    let uniqueLetters = [... new Set(letters)];
    
    let uniqueSorted = uniqueLetters.map(item => item.split("").sort().join(""));
    
    uniqueSorted = [... new Set(uniqueSorted)];
    
    var cache = {};
    
    for (let i=0; i< array.length; i++){
      array[i] = array[i].split('').sort().join("");
    }
    
    let array_alone = [...array];
    
    if (array[0]==="") array.shift();
    
    for (let i = 0; i < array.length; i++){
      
      if (array.length!==operators.length){if(i===0) continue;} 
      array[i] = operators.shift() + array[i];
    }
    
    let inverse = array.map(item => item.match(/[^a-z]+/g));
    
    let string = "";
    let operator = "";
    
    for (let element of uniqueSorted){
      cache[element] = [];
    }
      
      for (let element of uniqueSorted){
      for (let i=0; i < array.length; i++){
        
        string = array[i].match(/[a-z]+/g)[0];
        operator = array[i].match(/[^a-z]+/g);
        console.log("1", element, string, operator);
        
        if(operator===null) continue;
        
        if(operator[0]=="-01") operator[0] = "-10";
        if(operator[0]==="+01") operator[0] = "+10";
        
        if (string===element && operator !== null){cache[element].push(operator[0]);}
        
      }
    }
    
    let total = "";
    
    let cache_copied = cache;
    
    console.log(poly);
    
    console.log("cache", cache)
    
    // L'erreur est ici. Il faut changer les "01" qui apparaissent dans les listes de cache en "10".
    
    for (let element of Object.keys(cache)){
      for (let value of cache[element]){
        if(value.includes("+01")) value = "+10";
        if(value.includes("-01")) value = "-10";
      }
    }
    
    console.log("corrigé", cache);
    
    for (let element of Object.keys(cache)){
      
      total = "";
      
      if(cache[element]===[]) continue;
      for (let value of cache[element]){
        if(value==="+" || value==="-") value = value + "1";
        //console.log(element, value);
        total = total + value;
      }
      
      total = Function("return " + total)();
      
      cache_copied[element] = total;
      
    }
    
    for (let element of Object.keys(cache_copied)){
      if(cache_copied[element]===undefined) cache_copied[element] = 1;
    }
    
    cmp = function(a, b) {
      if (a > b) return +1;
      if (a < b) return -1;
      return 0;
  }
    
    let listLetters = Object.keys(cache_copied).sort(function(a, b) { 
      return cmp(a.length,b.length) || cmp(a,b);
  });
    
    console.log(listLetters);
    
    console.log("cache_copied", cache_copied);
    
    let polynomial = "";
    
    let element = "";
  
    
    for(let i=0; i < listLetters.length;i++){
      
      element = listLetters[i];
      
      if(cache_copied[element]===1) polynomial = polynomial + "+" + element;
      else if(cache_copied[element]===-1) polynomial = polynomial + "-" + element;
      else if(cache_copied[element]===0) {continue;}
      else if(cache_copied[element]>1) polynomial += "+" + cache_copied[element] + element;
      else{
      polynomial += cache_copied[element] + element;
      }
    }
    
    if(polynomial[0]==="+") polynomial = polynomial.slice(1);
    
    return polynomial;
    
  }