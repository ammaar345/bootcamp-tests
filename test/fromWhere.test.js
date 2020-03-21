describe("fromWhere", function() {
  
  
    it("Bellville",function(){ 
        var regNumber="CY";
        assert.equal(fromWhere(regNumber), "Bellville");
    });
    it("Paarl ",function(){ 
        var regNumber="CJ";
    
    assert.equal(fromWhere(regNumber),"Paarl");
});
it("Cape Town",function(){ 
    var regNumber="CA";

assert.equal(fromWhere(regNumber),"Cape Town");
});

it("Some Other Place!",function(){ 
    var regNumber="CC";

assert.equal(fromWhere(regNumber),"Some other place!");
});
});