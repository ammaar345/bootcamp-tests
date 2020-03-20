describe("Greet", function () {

    it("should greet Mecayle", function () {

        assert.equal(greet("Mecayle"), "Hello, Mecayle");
        assert.deepEqual(greet("Mecayle"), "Hello, Mecayle" );  
});
});