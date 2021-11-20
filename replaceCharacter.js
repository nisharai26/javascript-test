function replace_similar_chars(s){
    s = s.replace(/ /,'')
    s = s.replace(/[00Q]/g,'O')
    s = s.replace(/[1IT]/g,'I')
    s = s.replace(/[2Z]/g,'Z')
    s = s.replace(/[5S]/g,'S')
    s = s.replace(/[8B]/g,'B')
    return s
}
replace_similar_chars( "812","BIZ")