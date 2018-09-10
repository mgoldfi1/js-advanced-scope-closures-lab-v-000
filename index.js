function produceDrivingRange(blockRange) {
  debugger;
  return function(distance) {
    if (distance < blockRange) {
      return true
    } else {return `${distance - blockRange} blocks out of range`}
  }
}
