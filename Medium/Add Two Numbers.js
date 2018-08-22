/*
  Date: 08/21/2018
  Source: https://leetcode.com/problems/add-two-numbers/description/
*/

// This solution implements a singly linked list data structure in Javascript/
// Read about linked lists here: https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// Singly Linked List Solution

const addTwoNumbers = (l1, l2) => {
  // Declare new linked list based on constructor function above.
  var linkedList = new ListNode(0);
  var answer = linkedList; 

  // Function that adds values at each node and handles the carryover.
  const add = (l1, l2, carry) => {
    var sum = 0;
    if(!l1 && !l2 && carry === 0){
      return 0;
    } 

    if(l1){
      sum += l1.val;
      l1 = l1.next;
    } 
    if(l2){
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    linkedList.next = new ListNode(sum % 10);
    carry = parseInt(sum/10);
    linkedList = linkedList.next;
    add(l1, l2, carry);
  }
  
  // Run add function with our two lists as parameters.
    add(l1,l2,0);
    return answer.next;
};


// BONUS: Solution assuming arguments are in Array format
// Because I didn't read the instructions properly the first time around :)

const addTwoNumbers = (l1, l2) => {
  let answer = [];
  let carry = 0;
  let sum = 0;

  for(let i=0; i<l1.length ; i++) {
    sum = l1[i] + l2[i];

    if(sum >= 10) {
      carry = Number(sum.toString().substring(0, 1));
      answer.push(Number(sum.toString().substring(1, 1)));
    } else {
      answer.push(sum + carry);
      carry = 0;
    }
  }
  return answer;
};