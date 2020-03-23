describe("Calculate how many years ago from todays date to the given date.", function() {
  
  
    it("The amount of years is 44",function(){ 
       var year=1976;
        assert.equal(yearsAgo(year),44);
        
    });

    it("The amount of years is 44",function(){ 
        var year=1986;
         assert.equal(yearsAgo(year),34);
         
     });    it("The amount of years is 44",function(){ 
        var year=1921;
         assert.equal(yearsAgo(year),99);
         
     });
});