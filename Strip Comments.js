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

describe("Tests", () => {
    it("test", () => {
  function checkComments(input, markers, expected) {
    var actual;
    actual = solution(input, markers);
    return Test.expect(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
  };
  
  checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
  checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")
  });
  });

  function solution_cor1(input, markers) {
    return input.split('\n').map(
      line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
      )
    ).join('\n')
  }

  function solution_cor2(input, markers){
    return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
  }