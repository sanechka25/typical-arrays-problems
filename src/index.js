
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
  let sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length
}
