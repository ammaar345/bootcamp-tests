describe("countAllFromTown", function() {
  
  
    it("Successfully counted CF plates",function(){ 
        var string="CJ 124,CY 567,CL 345, CF 456, CL 341"
var loc="CF"
        //fromStellies should contains
        assert.deepEqual(countAllFromTown(string,loc), 1);
    });
    it("Successfully counted CL plates",function(){ 
        var string="CL 124,CY 567,CL 345, CJ 456,CL 341";
        var loc="CL";
    assert.deepEqual(countAllFromTown(string,loc),3);
});

});