/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

let NO_OF_CHARS = 256;

function isAnagram(str1, str2)
{
    let count = new Array(NO_OF_CHARS) ; 
    let s1 = str1.toLowerCase();
    let s2 = str2.toLowerCase();

    for(let i = 0 ; i < NO_OF_CHARS ; i++) 
    {
      count[i] = 0 ; 
    }

    let i ; 

    if(s1.length != s2.length) 
    {
      return false ; 
    }


    for(i = 0 ; i < s1.length ; i++) 
    {
      count[s1[i].charCodeAt(0) - 
      'a'.charCodeAt(0)]++;
      count[s2[i].charCodeAt(0) - 
      'a'.charCodeAt(0)]--;
    }


    for(i = 0 ; i < NO_OF_CHARS ; i++) 
    {
      if(count[i] != 0) 
      {
        return false ; 
      }  
    }

    return true ; 
}

module.exports = isAnagram;
