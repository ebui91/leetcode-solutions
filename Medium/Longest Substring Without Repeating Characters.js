/*
  Date: 08/17/2018
  Source: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Level 3 Solution
// Uses a hashmap to store a "window" that keeps track of the longest substring
// Define a mapping of the characters to its index
// Skip the characters immediately when a repeated character is found
// If a duplicate is found in the [i, j) range, skip all elements in range [i,j'] and set i to j'+1 directly
const lengthOfLongestSubstring = (s) => {
  const map = {};
  let max = 0;
  let i = 0;

  for (let j=0; j<s.length; j++) {
    const c = s[j];

    if (map[c] !== undefined) {
      i = Math.max(map[c], i);
    }
    max = Math.max(max, j - i + 1);
    map[c] = j + 1;
  }
  return max;
};