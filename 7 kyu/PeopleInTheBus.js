var number = function(busStops){
    let sumBus = 0
    for ( let busStop of busStops) {
      sumBus += busStop[0] - busStop[1]
    } return sumBus
  }