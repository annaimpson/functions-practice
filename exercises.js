/**
 *
 */
max(10, 20);
maxOfThree(10, 20, 30);
// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
   if(b > a){
    //  console.log(b);
     return b;
   }else{
      // console.log(a);
     return a;
   }
}
// console.assert(max(10, 20) == 20);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
    if(c > b){
      return c;
    }else{
      return b;
    }
    if (c > a){
      return c;
    }else{
      return a;
    }
}
// console.assert(maxOfThree(10, 20, 30) == 30);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
isVowel('r');
function isVowel(char){
    "use strict";
    if(char == 'a' || char =='e' || char == 'i' || char == 'o' || char == 'u' || char == " " ){
      return true;
    }else{
      return false;
    }

}
// console.assert(isVowel('r')=== true);

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
rovarspraket('this is fun');
function rovarspraket(phrase){
    "use strict";
    var final = "";
    var letterSplit = phrase.split("");
    for(var i=0; i< letterSplit.length; i++){
      if(isVowel(letterSplit[i])){
        final += letterSplit[i];
      }else{
        final += letterSplit[i] + "o" + letterSplit[i];
      }
    }
    return final;
}
// console.assert(rovarspraket('this is fun') == "tothohisos isos fofunon");

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
sum([1, 2, 3, 4]);
function sum(array){
    "use strict";
    var previousValue = ("");
    var currentValue = ("");
    var currentIndex = ("");
    reduce(previousValue, currentValue, currentIndex, array);
    {
      return previousValue + currentValue;}
    }
console.assert(sum([1, 2, 3, 4]) == 10);



function multiply(){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
