/*
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

'Hello world' = true
' Hello world' = false
'Hello world  ' = false
'Hello  world' = false
'Hello' = true
// Even though there are no spaces, it is still valid because none are needed
'Helloworld' = true 
// true because we are not checking for the validity of words.
'Helloworld ' = false
' ' = false
'' = true
 */

function validSpacing(s) {
    //let aSpaces1 = Array.from(' ');
     if(s.length == 0){
         return true;
     }
     if(s[0] == ' ' || s[s.length-1] == ' '){
         return false;
     }
     let aSpaces0 = s.split(' ');
     for(let i = 0, length = aSpaces0.length; i < length; i++){
         if(aSpaces0[i] == ''){
             return false
         }
     }
     return true;
 
 }