describe("Finding Items with a quantity greater than 20", function () {


    it("Pears and Banana quantity is greater than 20", function () {
        var objItems = [{ "name": "apples", "qty": 10 }, { "name": "pears", "qty": 37 }, { "name": "bananas", "qty": 27 }, { "name": "apples", "qty": 3 }];
        assert.deepEqual(findItemsOver20(objItems), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });
    it("No fruit quantity is greater than 20 ", function () {
        var objItems =[{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}];

        assert.deepEqual(findItemsOver20(objItems), []);
    });
    it("Apple and Banana Quantity is greater than 20", function () {
        var objItems =[{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}];

        assert.deepEqual(findItemsOver20(objItems), [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}]);
    });

   
});