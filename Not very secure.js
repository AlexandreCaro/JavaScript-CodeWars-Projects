function alphanumeric(string){
  
    if (string==="") return false;
    
    if (/[^a-zA-Z0-9]/g.test(string)) return false;
    
    return true;
  }

  describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(alphanumeric("Mazinkaiser"), true)
  Test.assertEquals(alphanumeric("hello world_"), false)
  Test.assertEquals(alphanumeric("PassW0rd"), true)
  Test.assertEquals(alphanumeric("     "), false)
    });
  });
  