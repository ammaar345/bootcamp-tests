describe("isWeekday", function() {
  
  
    it("It is not a weekday",function(){ 
       var day="Saturday";
        assert.equal(isWeekday(day),false);
        
    });
    it("It is a weekday",function(){ 
        var day="Monday";
    assert.equal(isWeekday(day),true);
});

});