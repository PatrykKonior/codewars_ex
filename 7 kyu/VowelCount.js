function getCount(str) {
    let count = []
    let word = str.split('')
    for (let i of word) {
      if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
        count += i
      }
    } return count.length
  }