function generateBC(url, separator) {
  
    // Maintenant il faut gérer le cas où on a des ? et remplacer les strings de manière appropriée
    // jusqu'au & dans l'url parce qu'on le garde celui-là.
    
    console.log(url);
    
    console.log(typeof url);
    
    let upperExpressions = ["HOME"]
    
    const listReplace = [".html", ".htm", ".php", ".asp"];
    
    let myList = url.split("/");
    
    let includesTag = myList[myList.length-1].includes("#");
    
    for(let element of listReplace){
      if(myList[myList.length-1].includes(element)){
        console.log(element);
        myList[myList.length-1] = myList[myList.length-1].slice(0, myList[myList.length-1].indexOf(element));
      }
    }
    
    let urlSplit = null;
    
    let acronimize = function(string){
      
      let listIgnore = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
      
      let listSplit = string.split("-");
      
      let acronym = "";
      
      for(let element of listSplit){
        if(listIgnore.includes(element)) continue;
        acronym += element[0].toUpperCase();
      }
      
      return acronym;
    }
    
    for (let i=1; i < myList.length; i++){
      if(myList[i].length>30) {upperExpressions.push(acronimize(myList[i]));}
      else{upperExpressions.push(myList[i].toUpperCase());}
    }
    
    
    if(includesTag){
      myList.pop();
      upperExpressions.pop()
    }
    
    console.log("after", includesTag, myList, upperExpressions)
    
    
    let string = "<a href=\"/\">" + upperExpressions[0] + "</a>" + separator;
    
    let middleString = "";
    
    let count = 0;
    
    for (let i=1; i < myList.length-1; i++){
      if(count>=1) middleString += "/";
      middleString += myList[i]
      string += "<a href=\"/" + middleString + "/\">" + upperExpressions[i] + "</a>" + separator;
      count++;
    }
    
    console.log(myList, upperExpressions);
    
    let stringReplacement = "";
    
    for(let i=0; i< upperExpressions.length; i++){
      if(upperExpressions[i].includes("-")){
        upperExpressions[i] = upperExpressions[i].replace("-", " ");
      }
    }
    
    if(includesTag=true) string += "<span class=\"active\">" + upperExpressions[upperExpressions.length-1] + "</span>";
    
    else {
      string += "<span class=\"active>" + upperExpressions[upperExpressions.length-1] + "</span>";
    }
    
    return string;
    
    /*
    &lt;a href="/"&gt;HOME&lt;/a&gt; / &lt;a href="/users/"&gt;USERS&lt;/a&gt; / &lt;span class="active"&gt;GIACOMOSORBI&lt;/span&gt;
    &lt;a href="/"&gt;HOME&lt;/a&gt; / &lt;a href="/users/"&gt;USERS&lt;/a&gt; / &lt;span class="active"&gt;GIACOMOSORBI?REF=CODEWARS&lt;/span&gt;
  */
  
  }