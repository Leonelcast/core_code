/*The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down. */

function dutyFree(normPrice, discount, hol){
    let priceDiscounted = normPrice * discount /100;
    return Math.floor(hol / priceDiscounted);
  }
// Con esta funcion, encontramos primero el descuento total que se va a hacer, si el precio normal es 120 y el decuento del 20% el total
// es === 24, luego utilzamos la funcion Math.floor la cual devuelve un entero 
// y dividimos hol el cual es la cantidad de dinero que podemos gastar dentro de nuestro resultado de priceDiscounted.