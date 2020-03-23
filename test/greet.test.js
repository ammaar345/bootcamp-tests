describe("Greets the name given.", function () {

    it("should greet Mecayle", function () {

        assert.equal(greet("Mecayle"), "Hello, Mecayle");
        assert.deepEqual(greet("Mecayle"), "Hello, Mecayle" );  
});
it("should greet Ammaarah", function () {

    assert.equal(greet("Ammaarah"), "Hello, Ammaarah");
    assert.deepEqual(greet("Ammaarah"), "Hello, Ammaarah" );  
}); 
  it("should greet John", function () {

    assert.equal(greet("John"), "Hello, John");
    assert.deepEqual(greet("John"), "Hello, John" );  
});

});