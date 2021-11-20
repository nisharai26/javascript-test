const similarLicensePlates = (plate1, plate2) => {
    function replace_similar_chars(s){
        s = s.replace(/ +/g, "")
        s = s.replace('0','O')
        s = s.replace('Q','O')
        s = s.replace('1','I')
        s = s.replace('I','I')
        s = s.replace('T','I')
        s = s.replace('2','Z')
        s = s.replace('Z','Z')
        s = s.replace('5','S')
        s = s.replace('S','S')
        s = s.replace('8','B')
        s = s.replace('B','B')
        console.log(s)
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

