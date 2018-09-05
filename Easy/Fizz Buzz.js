/*
  Date: 09/05/2018
  Source: https://leetcode.com/problems/fizz-buzz/description/
*/


/**
 * @param {number} n
 * @return {string[]}
 */
 
 // The trickiest part about FizzBuzz is making sure the order of your 'if' statements are set up in a way where multiples of 3 AND 5 are caught first.
const fizzBuzz = num => {
  let answer = []
    
  for(let i=1; i<=num; i++) {
    i%3 == 0 && i%5 == 0 ? answer.push("FizzBuzz")
      : i%3 == 0 ? answer.push("Fizz")
      : i%5 == 0 ? answer.push("Buzz")
      : answer.push(i.toString())
  }
    return answer
};
