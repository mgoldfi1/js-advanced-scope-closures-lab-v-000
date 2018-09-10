function produceDrivingRange(blockRange) {
  return function(start,end) {
    if (distance < blockRange) {
      return `${blockRange - distance} blocks within range`
    } else {return `${distance - blockRange} blocks out of range`}
  }
}
