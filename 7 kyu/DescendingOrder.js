function descendingOrder(n){
    let strn = n.toString()
    let table = strn.split("")
    let tableSorted = table.sort(function (a, b) {
      return b - a
    })
    let newTable = tableSorted.join("")
    return Number(newTable)
  }