const withdraw = amount => {
    var result = new Array(3);
   
     let remainder = amount % 100;
     if((remainder == 10 || remainder == 30)&& (amount >= 100)){
       result[0] = Math.floor((amount / 100))-1
       amount -= result[0] * 100 
     }else{
      result[0] = Math.floor(amount / 100)
       amount -= result[0] * 100 
       
     }
    
    console.log(amount)
     if(amount % 20 == 0){
       result[1] =  0
     }else if(amount < 50){
       result[1] = 0
     }else{
       result[1] = 1
     amount = amount - (result[1] * 50)
       
     }
   console.log(amount)
     result[2] = amount / 20;
     return(result)
   };