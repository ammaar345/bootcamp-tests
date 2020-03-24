describe("Greets the name given.", function () {

    it("Should greet Mecayle", function () {
var name="Mecayle"
        assert.equal(greet(name), "Hello, "+name);
        assert.deepEqual(greet("Mecayle"), "Hello, Mecayle" );  
});
it("Should greet Ammaarah", function () {
var name="Ammaarah"
    assert.equal(greet(name), "Hello, "+name);
    assert.deepEqual(greet(name), "Hello, "+name );  
}); 
  it("Should greet John", function () {
      var name="John";
    assert.equal(greet(name), "Hello, "+name);
    assert.deepEqual(greet(name), "Hello, "+name);  
});

});