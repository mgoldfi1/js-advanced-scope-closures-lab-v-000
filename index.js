function produceDrivingRange(number) {
  return function(distance) {
    if (distance < number){return true} else {return false}
  }
}
