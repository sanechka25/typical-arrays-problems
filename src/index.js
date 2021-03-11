
exports.min = function min (array) {
  let min = array[0]
  for(i = 0; i < array.length; i++){
    if(array[i] < min){
      min = array[i]
    }
  }
  return min;
}

exports.max = function max (array) {
  let max = array[0]
  for(i = 0; i < array.length; i++){
    if(array[i] > max){
      max = array[i]
    }
  }
  return max;
}

exports.avg = function avg (array) {
  let sum = 0
  for(i = 0; i < array.length; i++){
    sum += array[i]
  }
  return sum / array.length;
}
