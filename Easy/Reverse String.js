/*
  Date: 09/05/2018  
  Source: https://leetcode.com/problems/reverse-string/description/
*/


/**
 * @param {string} s
 * @return {string}
 */
 
// Pretty straighforward. Convert string to array, use array reverse() method, and convert back to string.
const reverseString = str => str.split("").reverse().join("")
