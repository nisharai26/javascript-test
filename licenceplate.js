const similarLicensePlates = (plate1, plate2) => {
  function replace_similar_chars(s){
    s = s.replace(/ /,'')
    s = s.replace(/[00Q]/g,'O')
    s = s.replace(/[1IT]/g,'I')
    s = s.replace(/[2Z]/g,'Z')
    s = s.replace(/[5S]/g,'S')
    s = s.replace(/[8B]/g,'B')
    return s
}

      plate1 =replace_similar_chars(plate1.toUpperCase())
      plate2 =replace_similar_chars(plate2.toUpperCase())
  
      if (plate1 === plate2){
        console.log("true")
         return true
      }else{
        console.log("false")
         return false
      }
    
    
    
    
    
    };

    similarLicensePlates("AI1BIICIT", "AIIBITC1I")

