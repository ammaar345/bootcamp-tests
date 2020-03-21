function totalPhoneBill(callSms){
    // console.log(callSms)
   const callBill=2.75;
     const smsBill=0.65;
   var icountCalls=0;
     var icountSms=0;
   //var callCost
   //var smsCost
     var arrCellular=callSms.split(",")
    //console.log(arrCellular) ;
    for (var i=0;i<arrCellular.length;i++){
     // console.log(arrCellular[i].trim())
    if (arrCellular[i].trim().startsWith('s')){
   //console.log(arrCellular[i].trim())
      icountSms++;
    }
    else {
      icountCalls++;
    
    }
      
   
    }var cost=(icountSms*smsBill)+(icountCalls*callBill)
     return "R"+cost.toFixed(2)
    
   }