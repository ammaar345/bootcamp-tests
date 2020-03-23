describe("Calculates the transportfee according to work shift.", function() {
  
  
    it("Morning",function(){ 
        var shift="morning";
        assert.deepEqual(transportFee(shift), "R20");
    });
    it("Afternoon",function(){ 
        var shift="afternoon";
    
    assert.deepEqual(transportFee(shift),"R10");
});
it("Night",function(){ 
    var shift="nightshift";

assert.deepEqual(transportFee(shift),"free");
});

});