// regex tester: regex101.com
const string = 'all your base are belong to us';
const regex = /base/;
const isExisting = regex.test(string);
console.log(isExisting);
// /^base$/ busca la palabra base a comparacion de lo que se realizo anteriormente, esta regex solo busca base. 
// No puede ser bases, abases, etc. tienen que ser la palabra base 

const sentence = 'my name is leo';
const regexs = /name is ([a-z]+)/;
const match = regexs.exec(sentence);

if (match){
    const name = match[1]
    console.log(name)
}else{
    console.log('no match')
}


const files = 'fileA.mp3 file_01.mp3 file_02.mp3 test.csv document.txt';
const regexss = /(\w+)\.mp3/g;
let exist = regexss.exec(files);

while(exist){
    const fileName = exist[1]
    console.log(fileName)

    exist = regexss.exec(files)
}