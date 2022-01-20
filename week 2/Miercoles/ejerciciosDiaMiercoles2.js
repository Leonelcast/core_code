/*Your function takes two arguments:

current father's age (years)
current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2) 
  }
//R: tenemos que encontrar en cuantos años el papa seria el doble de viejo que su hijo, por esto necesitamos hacer una multiplicacion 
// a la edad del hijo que seria por ejemplo 7 * 2 === 14 y la edad del padre es 36, luego debemos de restarlo 36 - 14 === 22
// pero en este caso necesitamos utilizar Math.abs ya que se nos indica que solo necesitamos resultados positivos. 