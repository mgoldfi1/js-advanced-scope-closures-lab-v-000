function produceDrivingRange(blockRange) {
  return function(distance) {
    if (distance < blockRange) {
      return `${blockRange - distance} blocks within range`
    } else {return `${distance - blockRange} blocks out of range`}
  }
}
