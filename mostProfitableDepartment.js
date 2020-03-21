function mostProfitableDepartment(salesData){
    console.log(salesData.length)
      //console.log(salesData);
    // var total=0;
      var objMostProfit={};
      for (var i=0;i<salesData.length;i++){
     var index = salesData[i].department;
      //console.log(index)
        // if the current fruitString is not in the list
        
        if (objMostProfit[index]=== undefined) {
            // put it in the Object with a count of 0
           objMostProfit[index]= 0;
        //console.log(index.department) 
        // increment the current fruits counter with 1
       //console.log(objMostProfit[index.department])
         // objMostProfit[index]=[index];
        } objMostProfit[index]+=salesData[i].sales
     
        
        
       // var amt=salesData[i].sales ;
      }var highest = 0;
       var dep = ''  
      for (var amt in objMostProfit )
      {
      
       if (objMostProfit[amt] > highest){
        highest = objMostProfit[amt];     
        dep = amt;
       }
      // console.log(highest)
      }
       // console.log(highest) 
      return dep
      
    }