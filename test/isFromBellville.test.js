
 // fix this function to make the unit tests pass below

  
  describe("Indicates whether plate is from bellville or not.", function() {
  
  it("Registration plate starting with CY should return true", function() {
     
      assert.equal( true,isFromBellville("CY"));
   });
 it("Registration plate starting with CJ should return false",function()
 {
   assert.equal(false,isFromBellville("CJ"))
 })
 it("Registration plate starting with CK should return false",function()
 {
   assert.equal(false,isFromBellville("CK"))
 })
  })
  
