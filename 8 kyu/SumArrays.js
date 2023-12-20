// Sum Numbers
function sum (numbers) {
    if (numbers == []) {
      return 0
    }
    let sum1 = numbers.reduce((acc, currentValue) => {
      return acc + currentValue
    },0)
    return sum1
};