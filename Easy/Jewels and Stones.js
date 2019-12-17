/*
  Date: 12/17/2019
  Source: https://leetcode.com/problems/jewels-and-stones/
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// Simplest solution using nested for loops
// NOT performant
// NOT very elegant
// ... but at least it's readable lol
var numJewelsInStones = function(J, S) {
  let answer = 0;
  
  for(let x=0; x<S.length; x++) {
    for(let i =0; i<J.length; i++) {
      if(J[i] === S[x]) answer++
    }
  }
  return answer;
};

// Cheeky solution using Set and Array methods
[...S].filter((char) => J.indexOf(char) > -1 ).length

