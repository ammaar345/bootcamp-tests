describe("Greets the name given.", function () {

    it("should greet Mecayle", function () {
var name="Mecayle"
        assert.equal(greet(name), "Hello, "+name);
        assert.deepEqual(greet("Mecayle"), "Hello, Mecayle" );  
});
it("should greet Ammaarah", function () {
var name="Ammaarah"
    assert.equal(greet(name), "Hello, "+name);
    assert.deepEqual(greet(name), "Hello, "+name );  
}); 
  it("should greet John", function () {
      var name="John";
    assert.equal(greet(name), "Hello, "+name);
    assert.deepEqual(greet(name), "Hello, "+name);  
});

});