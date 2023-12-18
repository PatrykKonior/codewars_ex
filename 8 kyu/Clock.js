function past(h, m, s){
    let milih  = h*60*60*1000
    let milim = m*60*1000
    let milis = s*1000
    return milih + milim + milis
  }