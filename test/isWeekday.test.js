describe("Returns true if the day is a weekday.", function() {
  
  
    it("Should return false",function(){ 
       var day="Saturday";
        assert.equal(isWeekday(day),false);
        
    });
    it("Should return true",function(){ 
        var day="Monday";
    assert.equal(isWeekday(day),true);
});


});