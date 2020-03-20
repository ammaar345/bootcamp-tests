describe("countAllPaarl", function() {
  
  
    it("Counted Paarl ",function(){ 
       var string="CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";
        assert.equal(countAllPaarl(string),3);
        
    });
  
});