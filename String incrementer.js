function incrementString (strng) {
  
    if (/\d+/.test(strng)===false) return strng + "1";
    
    let regexNum = /\d+/g;
    
    let matchNum = strng.match(regexNum)[0];
    
    let numbers = (parseInt(matchNum)+1).toString();
    
    numbers = numbers.padStart(matchNum.length, '0');
    
    let newString = strng.replace(matchNum, numbers.toString());
    
    return newString;
  
  }