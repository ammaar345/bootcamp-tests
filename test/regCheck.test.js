
  
  describe("Checks if the given location matches the plate registration.", function() {
  
  
   it("location matches plate(GP)",function()
   {var location="GP"
   var plate="DC 55 YU GP"
     assert.equal(true,regCheck(plate,location))
   })

   it("location doesn't match plate",function()
   {var location="EC"
   var plate="DC 55 YU GP"
     assert.equal(false,regCheck(plate,location))
   })
   it("location matches plate(L)",function()
   {var location="L"
   var plate="5566 L"
     assert.equal(true,regCheck(plate,location))
   })

   it("location doesn't match plate",function()
   {var location="M"
   var plate="5566 L"
     assert.equal(false,regCheck(plate,location))
   })
   it("location matches plate(EC)",function()
   {var location="EC"
   var plate="ERT 123 EC"
     assert.equal(true,regCheck(plate,location))
     
   })
   it("location doesnt match with plate",function()
   {var location="GP"
   var plate="ERT 123 EC"
     assert.equal(false,regCheck(plate,location))
     
   })
   it("location matches plate(MP)",function()
   {var location="MP"
   var plate="FGT 123 MP"
     assert.equal(true,regCheck(plate,location))
     
   })
   it("location doesnt match with plate",function()
   {var location="MP"
   var plate="FGT 123 MM"
     assert.equal(false,regCheck(plate,location))
     
   })
   
    })