function findOdd(A) {
    let sorted = A.sort((a, b) => a - b)
    let count = 0
    for (let i of sorted) {
        for (let k = 0; k < sorted.length; k++) {
            if (i === sorted[k]) {
                count += 1
            }
        } if ( count % 2 !== 0) {
            return i
        }  count = 0
    }
  }
