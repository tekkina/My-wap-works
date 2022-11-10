"use strict";
/*      1.Define a function max() that takes two numbers as arguments and returns the 
largest of them. Use the if-then-else construct available in Javascript. */
const max = function(num1 ,num2){

         if(num1>num2) return num1 ;
         
         else return num2 ; 
}

console.log(max(6,5)) ;

/*2.	Define a function maxOfThree() that takes three numbers as 
arguments and returns the largest of them. */

const  maxOfThree = function(num1 ,num2 ,num3){

          if(num1>num2 && num1>num3){
                    return num1 ; 
          }
          else if(num2 > num1 && num2>num3){
                    return num2 ; 
          }

          else{
                    return num3 ; 
          }
}


console.log(maxOfThree(2,2,5))

//3.Write a function isVowel() that takes a character 
//(i.e. a string of length 1) and returns true if it is a vowel, false otherwise

const isVowel = function(c){

          if(c.charAt(0)=='a' || c=='e' || c=='u' || c == 'i' || c=='o'){

                     return true ;
          }
          else{
                    return false ;
          }
         

}

console.log(isVowel('e'))


/**4.	Define a function sum() and a function multiply() that sums and multiplies (respectively)
 *  all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4])
 *  should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop) */

 function sum(array){

          var sum = 0 ; 
          var product = 1 ;

          for (let index = 0; index < array.length; index++) {

                     sum =sum +  array[index]  ;

                     
                    }

                    return sum ;

          
}
console.log(sum([1,2,3,4])) ;

function multiply(array){

          var product = 1 ;

          for(let i = 0 ; i < array.length ;i++){

                    product*=array[i] ;
          }

          return product ; 
}

console.log(multiply([1,2,3,4])) ;

//5.Define a function reverse() that computes the reversal of a string. 
//For example, reverse("jag testar") should return the string "ratset gaj".

function reverse(str){
          var rev = "" ;

          for(let i= str.length ;i>=0 ;i--){
                    rev = rev + str.charAt(i) ;
          }

          return rev ; 

}

console.log(reverse("jag testar")) ;


//6.Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(arra)
  {
    var max_str = arra[0].length;
   
    var ans = arra[0];
    
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}

console.log(findLongestWord(['samuel' ,'tsds'])) ;


//7.Write a function filterLongWords() that takes an array of
// words and an integer i and returns a new array containing 
//only those words that were longer than i characters.


function filterLongWords(array ,num){

          var newArray =[] ;
          var index = 0

          for (let i = 0; i < array.length; i++) {

                    if(array[i].length > num){
                     newArray[index++] = array[i] ;
                              
                    }
          
                    
          }


          return newArray ; 
} 
console.log(filterLongWords(['sam','zeray' ,'mehari'] ,3))


/**8.	Write a function named, computeSumOfSquares, that takes as input,
 *  an array of numbers and calculates and returns the sum of the squares of each number 
 * in the input array. E.g. computeSumOfSquares([1,2,3]) should be computed as 1*2 + 2*2 +3*2 = 14.
 *  Note: Write your Javascript code without using Imperative programming.
 *  i.e. Do NOT use any explicit looping construct; 
 * instead use functional programming style/approach. */


function computeSumOfSquares(array){

          const square = array.reduce((a,b)=> (0, a + b **2)) ;

          return square ;

}

console.log(computeSumOfSquares([1,2,3]))


//9.	Write a function named, printOddNumbersOnly, that takes as input, 
//an array of integral numbers and it finds and prints only the numbers which are odd.


function printOddNumbersOnly(array){

          const oddOnly = array.filter(a=> a % 2 == 1); 

          return oddOnly ;
}

console.log(printOddNumbersOnly([1,2,3,4,6,5,11])) ;


/**10.Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of 
 * integral numbers and calculates and returns the sum of the squares of only the even numbers in 
 * the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2*2 + 4*4 = 20. */

function computeSumOfSquaresOfEvensOnly(array){

          const sumOfEvenSqure = array.filter(a=> a% 2==0).reduce((a,b)=> a**2 + b **2) ; 
          
          return sumOfEvenSqure ; 


} 

console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5])) ;


/**11.Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) 
 * (defined in Problem 4 above) without using Imperative programming. i.e. 
 * Do NOT use any explicit looping construct; instead use functional programming style/approach */

 function sum1(array){

          const allSum = array.reduce((a,b)=>(0 ,a+b)) ;

          return allSum ; 
 }

 console.log(sum1([1,2,3,4])) ;


 function multiply1 (array){

          const allProduct= array.reduce((a,b)=>(1 ,a*b)) ;

          return allProduct ; 
 }

 console.log(multiply1([1,2,3,4])) ;


 /**12.	Implement Javascript code for a function named, findSecondBiggest, which takes as input,
  *  an array of numbers and finds and returns the second biggest of the numbers. For example, 
  * findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12.
  *  (Note: Do not use sorting!) */


 function findSecondBiggest(array){

          let largest = 0 ;

          let secondLargest = 0 ; 

          if(array.length<1){
                    return "enter valid input" ;
          }

          for(let i=0 ;i<array.length ;i++){

                    if(array[i] > largest){

                              largest = array[i] ; 
                    }
          }

          for(let i=0 ;i<array.length ;i++){

                    if(array[i] > secondLargest && array[i]!=largest){

                              secondLargest = array[i] ; 
                    }

          
          }

          return secondLargest ; 

         
 } 


 console.log(findSecondBiggest([1,2,3,4,5])) ; 


 /**13.	Write a function named printFibo, that takes as input, a given length, n, 
  * and any two starting numbers a and b, and it prints-out the Fibonacci sequence,
  *  e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. 
  * (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output;
  *  printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; 
  * printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
  * printFibo(n=6, a=0, b=1), * prints-out: "0, 1, 1, 2, 3, 5", as output; 
  * and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output). */

 function printFibo(n){

          let next  ;
          let a = 0 ;

          let b = 1 ;

          for(let i = 1 ; i <=n ; i++){
                   console.log(a) ;
                    
                    
                    next = a + b ; 
                      a = b ;
                      b = next ; 
                    }

 }

printFibo(10) ;







 





