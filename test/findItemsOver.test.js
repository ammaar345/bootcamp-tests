describe("findItemsOver20", function () {


    it("Pears and Banana quantity is greater than 20", function () {
        var objItems = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
        var threshold=20;
        assert.deepEqual(findItemsOver(objItems,threshold), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });
    it("No fruit quantity is greater than 20 ", function () {
        var objItems =[{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}];
var threshold=20;
        assert.deepEqual(findItemsOver(objItems,threshold), []);
    });
    it("Apples and Banana Quantity is greater than 20", function () {
       var objItems=[{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}]
var threshold=20;
        assert.deepEqual(findItemsOver(objItems,threshold), [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}]);
    });

   
});