function integrate(coefficient, exponent) {
    let new_exponent = exponent + 1
    let new_coefficient = coefficient / new_exponent
    return `${new_coefficient}x^${new_exponent}`
  }