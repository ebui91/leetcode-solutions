/*
  Date: 08/15/2018
  Source: 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// Level 1 Solution
// Brute Force method with nested for loop
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
      continue;
    }
  }
};


// Level 3 Solution
// One-pass Hash Table
// This is the data structure I used for keeping track of what values are needed 
// This is an example of what it looks like if the target is 9 and the  values are [2,7,11,15]
// {
//   2: { index: 0, neededMatch: 7 },
//   7: { index: 1, neededMatch: 2 },
//   11: { index: 2, neededMatch: -2 },
//   15: { index: 3, neededMatch: -6 }
// }

// Note: It will stop building the above structure as soon as the match is found (since its a one-pass).
// It would only build as far as this..
// { 2: { index: 0, neededMatch: 7 } }

const twoSum = function (nums, target) {
  let data = {};
  for (let i = 0; i < nums.length; i++) {

    // This portion checks on each increment for an existing match.
    let matchExists = data[(target - nums[i])];
    if (matchExists) {
      return [matchExists.index, i];
    }

    // Creates our data structure for an time efficient solution
    // - Sacrificing memory for speed gains
    if (!data[nums[i]]) {
      data[nums[i]] = {
        index: i,
        neededMatch: (target - nums[i])
      }
    }

  }
};