describe("totalPhoneBill", function() {
  
  
    it("Bill Total Processed",function(){ 
        var callSms="call, sms, call, sms, sms";
        assert.equal(totalPhoneBill(callSms), "R"+7.45);
    });
    it("Bill Total Processed",function(){ 
        var callSms="call, sms";
    
    assert.equal(totalPhoneBill(callSms),"R"+3.4.toFixed(2));
});
it("Bill Total Processed",function(){ 
    var callSms="sms, sms";

assert.equal(totalPhoneBill(callSms),"R"+1.3.toFixed(2));
});

});