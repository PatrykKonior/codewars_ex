const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let range = fuelLeft * mpg
    let left = distanceToPump - range
    return left <= 0
  };