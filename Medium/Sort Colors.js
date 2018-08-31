/*
  Date: 08/31/2018
  Source: https://leetcode.com/problems/sort-colors/description/
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let answer = []
  let count = 0
  let count1 = 0
  let count2 = 0

  for (let i = 0; i < nums.length; i++) {
    nums[i] == 0 ? count++
      : nums[i] == 1 ? count1++
        : nums[i] == 2 ? count2++
          : null
  }

  for (let i = 0; i < nums.length; i++) {
    i < count ? nums[i] = 0
      : i < count + count1 ? nums[i] = 1
        : nums[i] = 2
  }
}