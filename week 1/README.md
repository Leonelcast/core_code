# core_code
## Tuesday
### 1. Watch this video about compilation and interpretation
### 2. Search and answer the question: Java language is compiled or interpreted?
- Java language is compiled and interpreted 
### 3. Create an algorithm to calculate the equivalent of your local currencty to USD
- First of all we need the exact price equivalent of Quetzales to 1 dollar, so right now the price of $1 is equivalent to Q7.72. if I need to get another number for example Q100 I need to divided into 7.72 and it would be $12.95
### 4. Anwser to the question: Why is pseudocode helpful?
- It´s really useful because it can help to define an idea because all that matters is comprehension so the important thing is that you must explain what you are thinking. We don´t even need to code, because we create our own rules, and also is a set of instructions that we can use later and made it into code. 

### 5. Read about Pseudocode here, you can also find some examples here
### 6. Create a pseudocode to calculate the aproximated age of a user base on the year they born, (you can define a variable with the actual year if you need it, like for example i could define Y <-- 2022)
- the user needs to enter the value of the year they were born in this case I was born in y = 1997.
  the next step is to get the current year in this case it will be x = 2022.
  so we need to make this operation x - y, so it is 2022 - 1997 = 25  

### 7. Read about flowcharts here
### 8. Answer to the question: Why are flowcharts important to us as developers?
- A flowchart is really important as a software developer because it can help us to describe a process of what our system should do and shouldn´t. One of the must important flowchart as a software developer is UML. We can use a flowchart for the following:
- Demonstrate how the code is organized.
- Visualize the execution of a code within a program.
- Show the structure of a website or application.
- Understand how users navigate a website or program.
### 9. Search about High-level languages and Low-level languages, you can start with this video
- High-level: they are easy for the humans to understand but it´s difficult for the computer. We can find here interpreted languages like: JS, Python and ruby. Also we find here compiled languages like Java, C and others.
- Low-level: they are easy for the computers to understando but difficult for the humans. Here we find programming languages like Assembler that it's really difficult for the humans to understand.

## Wednesday
### 1. Learn about binary, decimal and hexadecimal numbers
### 2. Translate the year you where born to binary, decimal and hexadecimal
- year I was born: 1997
- binary: 111 1100 1101
- decimal: 1997
- hexadecimal: 7CD
### 3. Translate 51966 into hexadecimal and binary
- hexadecimal: CAFE
- binary: 1100 1010 1111 1110
### 4. Use a Low-level language, for example MIPS aseembler, to do so, you will need to follow this guide. We recomend to check the guide first but also this presentation could be helpful.

### 5. Base on the examples and the guide of the low-level language: 5.1 Create a program to add two numbers given by the user 5.2 Create a program that display your name
##### Display name:
```
 .data
    message: .asciiz "\Leonel Castaneda\n"
  .text
    main:
      li $v0, 4
      la $a0, message
      syscall
```
##### Add to numbers by user:
```
  .data
    number1: .asciiz "\nIngrese el primer numero: "
    number2: .asciiz "\nIngrese el segundo numero: "
  .text
    main:
      li $v0, 4
      la $a0, number1
      syscall

      li $v0, 5
      syscall

      move $t0, $v0

      li $v0, 4
      la $a0, number2
      syscall

      li $v0, 5
      syscall

      move $t1, $v0

      li $v0, 1
      move $a0, $t0
      syscall
```    
## Thursday
### 1. Search for real word applications of Javascript
JS become a really solid programming language and it´s used for a lot of things for example:
- videogames
- web development
- web applications
- server applications
- web servers
- mobile applications

### 2. github
github is really important is a really big community where you can learn a lot, but github also needs git that it´s the control version. You need to install git to get the versions of your code and also follow some of the must important commands of git:
- git init
- git add .
- git status 
- git clone <URL>
- git commit -m "Commit message"
- git push origin master
- git remote add origin <server>
- git pull
- git merge <branchname>

