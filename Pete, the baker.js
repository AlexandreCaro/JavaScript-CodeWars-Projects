function cakes(recipe, available) {
  
    let liste_ingredients = [];
    
    let keys_recipe = Object.getOwnPropertyNames(recipe);
    
    for (let element of keys_recipe){
      if(available.hasOwnProperty(element)===false) return 0;
      liste_ingredients.push(Math.floor(available[element]/recipe[element]));
    }
    
    return Math.min(...liste_ingredients);
    
  }

  const cakes_cor = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  )