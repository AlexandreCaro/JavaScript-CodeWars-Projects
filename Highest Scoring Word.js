function high(x){
    let words = x.split(" ");
    
    let score = function(string){
      
      let number = 0;
      
      let letters = string.split("");
      for (letter of letters){
        number += letter.charCodeAt()-96;
      }
      
      return number;
    }
    
    let words_score = words.map(string => score(string));
    
    console.log(...words_score);
    
    let best_words = words.filter(item => score(item)===Math.max(...words_score));
    
    return best_words[0];
  }