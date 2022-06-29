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

describe("Sample tests",() =>{
    it("Test reduction by equivalence",() =>{
    Test.assertEquals(simplify("dc+dcba"), "cd+abcd")
    Test.assertEquals(simplify("2xy-yx"),"xy")
    Test.assertEquals(simplify("-a+5ab+3a-c-2a"),"-c+5ab")
    })
    it("Test monomial length ordering",() =>{
    Test.assertEquals(simplify("-abc+3a+2ac"),"3a+2ac-abc")
    Test.assertEquals(simplify("xyz-xz"),"-xz+xyz")
    })
    it("Test lexicographic ordering",() =>{
    Test.assertEquals(simplify("a+ca-ab"),"a-ab+ac")
    Test.assertEquals(simplify("xzy+zby"),"byz+xyz")
    })
    it("Test no leading +",() =>{
    Test.assertEquals(simplify("-y+x"),"x-y")
    Test.assertEquals(simplify("y-x"),"-x+y")
    })
})

function simplify_cor1(poly){
    var h = {};
    poly.match(/[+-]?[^+-]+/g).forEach(x => {
      var m = x.match(/[a-z]+/)[0],
          k = x.replace(m, '');
      m = m.split('').sort().join('');
      k = Number(/\d/.test(k) ? k : k+'1');
      h[m] = (h[m]||0) + k;
    });
    return Object.keys(h)
      .filter(m => h[m])
      .sort((x, y) => x.length - y.length || (x < y ? -1 : 1))
      .map((m, i) => ({
        sign : h[m] < 0 ? '-' : i > 0 ? '+' : '',
        k : Math.abs(h[m]),
        m : m
      }))
      .map(o => o.sign + (o.k == 1 ? '' : o.k) + o.m).join('');
  }

function simplify_cor2(poly){
    poly = poly.replace(/\w+/g, i => i
                    .replace(/[a-z]+/, i => [...i].sort``.join``))       // sort letters of monomials
                .replace(/([+-]|^)([a-z])/g, '$11$2')                  // add ommited 1
    let re = /([+-]?\d*)([a-z]+)/                                     // regExp for 1st monomial 
    let obj = {}, exp
    while (true) {                                                    // parse all monomials
        exp = poly.match(re)                                            // match first monomial
        if (!exp) break                                                 // if there is no match => parsing is finished
        poly = poly.replace(re, '')                                     // remove matched monomial from polinomial
        obj[exp[2]] = exp[2] in obj ? obj[exp[2]] += +exp[1] : +exp[1]  // save monomial to the object
    }
    return Object.entries(obj)                                        // create array of array-monomials
        .sort((a, b) => a[0].length - b[0].length || a[0] > b[0])       // sort array-monomials according to their length and alphabet
        .map(i => i.reverse``.join``).join`+`                           // transform array monomials to the string-monomials
        .replace(/\+-/g, '-')                                           // remove +-
        .replace(/[+-]?\b0[a-z]+/g, '')                                 // remove 0x
        .replace(/([+-])?\b1([a-z])/g, '$1$2')                          // remove 1x
        .replace(/^\+/, '')                                             // remove leading +
}