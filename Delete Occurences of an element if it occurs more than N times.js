function deleteNth(arr,n){
  
    let counter = function(array, item, limit){
      let compteur = 0;
      
      let newArray = [...arr];
      
      for (let element of newArray){
        console.log(compteur);
        if (element===item) {
          compteur++;
          if (compteur > limit) array.splice(array.lastIndexOf(item),1);
        }
      }
      
      return array;
    }
    
    let set = new Set(arr);
    
    console.log(set);
    
    for (let element of set) {
      console.log(element, arr);
      counter(arr, element, n);
    }
    
    return arr;
    
  }

  function deleteNth_cor(arr, x){
    cache = {};
    return arr.filter(function(n){
        cache[n] = (cache[n]||0) + 1;
        return cache[n]<=x;
    })
  }