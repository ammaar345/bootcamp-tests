describe("Count all number plates which are from Paarl.", function() {
  
  
    it("Counted Paarl Plates ",function(){ 
       var string="CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";
        assert.equal(countAllPaarl(string),3);
        
    });
  
    it("Counted Paarl Plates ",function(){ 
        var string="CJ 345 123, CJ 2345, CJ 123-546, CK 345, CJ 123";
         assert.equal(countAllPaarl(string),4);
         
     });
  
     it("Counted Paarl Plates ",function(){ 
        var string="CJ 345 123, CK 2345, CL 123-546, CK 345, CK 123";
         assert.equal(countAllPaarl(string),1);
         
     });
    
});