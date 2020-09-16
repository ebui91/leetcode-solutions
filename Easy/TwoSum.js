/*
  Date: 09/16/2020
  Source: https://leetcode.com/problems/two-sum/description/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Apparently I've done this one before? But I'm rusty now, so let's run it back.
const twoSum = (nums, target) => {
  let hashmap = new Map();
  for(let i=0; i<nums.length; i++) {
    const match = target-nums[i];
    if(hashmap[match] !== undefined) {
      return [hashmap[match], i];
    }
    hashmap[nums[i]] = i;
  }
};