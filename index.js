function produceDrivingRange(blockRange) {
  return function(distance) {
    if (distance < blockRange){return true} else {return false}
  }
}
