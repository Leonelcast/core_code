/*Ejercicio 3
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A' 
https://www.codewars.com/kata/55ad04714f0b468e8200001c/train/javascript*/
function getChar(c){
    return String.fromCharCode(c)
  }