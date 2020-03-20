
 // fix this function to make the unit tests pass below

  
  describe("isFromBellville", function() {
  
  it("passing bellville plate", function() {
     
      assert.equal( true,isFromBellville("CY"));
   });
 it("failing not bellville plate",function()
 {
   assert.equal(false,isFromBellville("CJ"))
 })
  })
  
