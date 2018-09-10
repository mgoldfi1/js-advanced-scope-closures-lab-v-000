function produceDrivingRange(blockRange) {
  return function(start,end) {
    if ((Math.abs(parseInt(end) - parseInt(start)) < blockRange) {
      return `${blockRange - (Math.abs(parseInt(end) - parseInt(start))} blocks within range`
    } else {return `${(Math.abs(parseInt(end) - parseInt(start)) - blockRange} blocks out of range`}
  }
}
