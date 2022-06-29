decodeMorse = function(morseCode){
  
    let liste = morseCode.split(" ");
    
    let somme = "";
    
    for (let element of liste){
      if (element==="") {somme += " "; continue;}
      somme += MORSE_CODE[element];
    }
    
    somme = somme.replace(/\s+/g, " ").trim();
    
    return somme;
  
  }