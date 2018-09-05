/*
  Date: 09/05/2018
  Source: https://leetcode.com/problems/shuffle-an-array/description/
*/  


// Fun fact: I actually had to solve a similar challenge as a whiteboard question for one of my interviews earlier this year. 
// Minus the "functional programming" part and having to write new prototyped methods, but the logic was the same :) 
/**
 * @param {number[]} nums
 */
 
var Solution = function(nums) {
  this.nums = nums || []
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
 
Solution.prototype.reset = function() {
  return this.nums
};


/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
 
Solution.prototype.shuffle = function() {
  var shuffled = this.nums.slice(0, this.nums.length)

  for(let i=0; i<shuffled.length; i++) {
    let randomIndex = Math.floor(Math.random() * (shuffled.length-i)) + i
    let temp = shuffled[i]
    shuffled[i] = shuffled[randomIndex]
    shuffled[randomIndex] = temp
  }
  return shuffled
};


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
