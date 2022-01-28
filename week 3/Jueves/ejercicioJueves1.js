function foldArray(array, runs) {
    if (!runs) return array;
  
    var result = [];
    // new Array
    for (var i = 0; i < Math.ceil(array.length / 2); i++) {
      result[i] = array.length -i - 1 === i ? array[i] : array[i] + array[array.length - i - 1];
    }
    
    return foldArray(result, runs - 1);
  }