exports.min = function min (array) {
  if (array == undefined) return 0;
  boubleSort(array);
  return (array.length === 0) ? 0 : array[0];
}

exports.max = function max (array) {
  if (array == undefined) return 0;
  boubleSort(array);
  return (array.length === 0) ? 0 : array[array.length - 1];
}

exports.avg = function avg (array) {
  if (array == undefined) return 0;
  boubleSort(array);
  return (array.length === 0) ? 0 : getSum(array) / array.length;
}


function boubleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                let term = array[i];
                array[i] = array[j];
                array[j] = term;
            }
        }
    }
    return array;
}

function getSum(array) {
    let sum = 0;
    array.forEach(element => sum += element);
    return sum;
}
