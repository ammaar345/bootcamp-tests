describe("Counts all registration numbers", function() {
  
  
    it("passing",function(){ 
        var regCount = countRegNumber('CA 182736,CY 523519');
    assert.equal(regCount, 2);
    });
   
    it("passing",function(){ 
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
    assert.equal(regCount, 3);
    });  
    it("passing",function(){ 
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328,CL 123456');
    assert.equal(regCount, 4);
    });
 
});