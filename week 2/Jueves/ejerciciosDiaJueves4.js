function persistence(num) {
  
    let sizeArrayNumber = num.toString();
    let count = 0;
    
    while(sizeArrayNumber.length != 1){
      sizeArrayNumber = sum( sizeArrayNumber.toString() );
      count++;
    }
    return count
    
  }
  
  function sum(arrayNumber){
    let sumTotal = 1;
    
    for(let i = 0, sizeArrayNumber = arrayNumber.length ; i < sizeArrayNumber; i++){
      sumTotal *= parseInt(arrayNumber[i])
    }
    return sumTotal.toString();
  }