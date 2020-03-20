function countAllPaarl (strings){
    //console.log(strings)
    var newArray=[];
      var plates=strings.split(", ");
    //console.log(plates)
    for (var i=0;i<plates.length;i++){
    var platesPaarl=plates[i];
      if (platesPaarl.startsWith("CJ")){
      newArray.push(platesPaarl);}
     
      //console.log(newArray)
    }return newArray.length;
    }