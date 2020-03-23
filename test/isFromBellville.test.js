
 // fix this function to make the unit tests pass below

  
  describe("Indicates whether plate is from bellvill or not.", function() {
  
  it("passing bellville plate", function() {
     
      assert.equal( true,isFromBellville("CY"));
   });
 it("failing not bellville plate",function()
 {
   assert.equal(false,isFromBellville("CJ"))
 })
 it("failing not bellville plate",function()
 {
   assert.equal(false,isFromBellville("CK"))
 })
  })
  
