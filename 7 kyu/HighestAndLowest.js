function highAndLow(numbers){
    let separated = numbers.split(' ')
    let sortedUp = separated.sort(function(a, b){return b-a})
    
    return `${sortedUp[0]} ${sortedUp[sortedUp.length-1]}`
  }