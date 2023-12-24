function findAverage(array) {
    if (array.length === 0) {
      return 0 }
    let sum = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    })
    return sum / array.length
  }