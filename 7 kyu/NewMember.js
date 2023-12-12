function openOrSenior(data){
    let newData = []
    for ( let output of data) {
      if ( output[0] >= 55 && output[1] > 7) {
        newData.push('Senior')
      } else {
        newData.push('Open')
      }
    } return newData
  }