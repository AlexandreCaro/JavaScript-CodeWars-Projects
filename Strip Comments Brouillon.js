function solution(input, markers) {
  
  let string = "";
  
  let listWords = input.split("\n");
  
  console.log(listWords);
  
  function removeSubstring(text, startIndex, endIndex){
    if(endIndex < startIndex) startIndex=endIndex;
    
    var a = text.substring(0, startIndex);
    var b = text.substring(endIndex);
    return a+b;
  }
  
  let somme = "";

  
  for (let string of listWords){
    for (let element of markers){
      if(string.includes(element)){ string = string.substring(0, string.indexOf(element));
      }
    }
    string = string.trim();
    somme += string + "\n";
  }
  
  somme = somme.slice(0,-1);
  
  return somme;

};