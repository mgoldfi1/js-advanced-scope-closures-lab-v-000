function produceDrivingRange(blockRange) {
  return function(start,end) {
    let distance = (Math.abs(parseInt(end) - parseInt(start))
    if (distance < blockRange) {
      return `${blockRange - distance} blocks within range`
    } else {return `${distance - blockRange} blocks out of range`}
  }
}
