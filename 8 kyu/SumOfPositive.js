function positiveSum(arr) {
    let sum = 0
    for (let x of arr) {
       if (x > 0) {
         sum += x 
       }
    } return sum 
  }