function sumArray(array) {
    if (array === null || array === undefined) {
      return 0
    }
    return array.length < 2 ? 0
         : array.reduce((a, b) => a + b) - Math.min(...array) - Math.max(...array);
}