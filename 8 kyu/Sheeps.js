function countSheeps(sheep) {
    count = 0
    for ( let i of sheep) {
      if ( i == true ) {
        count += i
      }
    } return count
  }

  function countSheeps(sheep) {
    return sheep.filter(Boolean).length
  }