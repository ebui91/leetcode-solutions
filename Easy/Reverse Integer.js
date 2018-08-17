/*
  Date:
  Source: 
*/

/**
 * @param {number} x
 * @return {number}
 */

 // My solution using JS array methods
 // The part about 32-bit integers tripped me up and I'm still not sure why my condition uses Math.pow(2,31) instead of Math.pow(2,32)
const reverse = x => {
  let sign = x > 0 ? "" : "-";
  x = Math.abs(x);
  let answer = Number(sign + x.toString().split("").reverse().join(""));

  return Math.abs(answer) > Math.pow(2, 31) ? 0 : answer;
};