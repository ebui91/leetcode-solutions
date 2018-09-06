/*
  Date: 09/06/2018
  Source: https://leetcode.com/problems/keyboard-row/description/
*/


/**
 * @param {string[]} words
 * @return {string[]}
 */
 
 // My Solution. Uses map() and indexOf() to check all letters in each word against the letters in a standard QWERTY keyboard.
 // Uses variables first, second, and third that act as "flags" which indicate whether or not all of a word's letters are in the same row.
const findWords = (words) => {
	const firstRow = "qwertyuiop"
	const secondRow = "asdfghjkl"
	const thirdRow = "zxcvbnm"

	let answer = []
	let first = 0
	let second = 0
	let third = 0

	words.map(word => {
		let testCase = word.toLowerCase()

		for(let i=0; i<=word.length;i++) {
			firstRow.indexOf(testCase[i]) !== -1 ? first = 1
			: secondRow.indexOf(testCase[i]) !== -1 ? second = 1
			: thirdRow.indexOf(testCase[i]) !== -1 ? third = 1
			: null
		}	
		
		first + second + third == 1 ? answer.push(word) : answer
	
		first = 0
		second = 0
		third = 0		
	})
	return answer
}


// Level 2 Solution: Using filter(), every(), and includes() methods.
var findWords = function(words) {
  const keyboard = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m']
  ];

  return words.filter(word => keyboard.some(row =>
    word.split('').every(letter => row.includes(letter.toLowerCase()))
  ));
};


// Level 3 Solution: Using RegEx!
const findWords = (words) => {
  let arr = [];
  words.map(key=>{
    let cnt = /[qwertyuiop]/gi.test(key) + /[asdfghjkl]/gi.test(key) + /[zxcvbnm]/gi.test(key);
      if(cnt===1){
        arr.push(key);
      }
    })
  return arr;
}
