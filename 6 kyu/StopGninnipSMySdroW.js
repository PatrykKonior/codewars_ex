function spinWords(string){
    let word = string.split(' ')
    let table = ''
    for (let i of word) {
      if (i.length >= 5) {
        let reversed = i.split("").reverse().join("")
        table += reversed + ' '
      } else {
        table += i + ' '
      } 
    } return table.trimEnd()
  }