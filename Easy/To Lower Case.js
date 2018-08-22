/*
  Date: 08/22/2018
  Source: https://leetcode.com/problems/to-lower-case/description/
*/

// NOTE: the author probably meant for us to implement this functionality WITHOUT using Javascript's built-in toLowerCase() method.

/**
 * @param {string} str
 * @return {string}
 */

// Nice one-liner solution. Kind of pointless honestly :P
const toLowerCase = (str) => str.toLowerCase()

// My actual solution without using toLowerCase()
// Uses a switch statement. Not ideal, but it works.
const toLowerCase = str => {
  var replace = (letter, i) => {
    switch(letter) {
      case "A":
        arr[i] = "a"
        break;
      case "B":
        arr[i] = "b"
        break;
      case "C":
        arr[i] = "c"
        break;
      case "D":
        arr[i] = "d"
        break;
      case "E":
        arr[i] = "e"
        break;
      case "F":
        arr[i] = "f"
        break;
      case "G":
        arr[i] = "g"
        break;
      case "H":
        arr[i] = "h"
        break;
      case "I":
        arr[i] = "i"
        break;
      case "J":
        arr[i] = "j"
        break;
      case "K":
        arr[i] = "k"
        break;
      case "L":
        arr[i] = "l"
        break;
      case "M":
        arr[i] = "m"
        break;
      case "N":
        arr[i] = "n"
        break;
      case "O":
        arr[i] = "o"
        break;
      case "P":
        arr[i] = "p"
        break;
      case "Q":
        arr[i] = "q"
        break;
      case "R":
        arr[i] = "r"
        break;
      case "S":
        arr[i] = "s"
        break;
      case "T":
        arr[i] = "t"
        break;
      case "U":
        arr[i] = "u"
        break;
      case "V":
        arr[i] = "v"
        break;
      case "W":
        arr[i] = "w"
        break;
      case "X":
        arr[i] = "x"
        break;
      case "Y":
        arr[i] = "y"
        break;
      case "Z":
        arr[i] = "z"
        break;
      default:
        return arr[i]
        break;
    }
  }

  let arr = str.split("")
  arr.map((letter, i) => {
    replace(letter, i)
  });

  return arr.join("")
};


// A much more perfomant and readable solution using charCodes.
const toLowerCase = str => {
  let newStr = ""
  for (let i = 0; i < str.length; i++) {
    let codeNum = str.charCodeAt(i)
    if (codeNum >= 65 && codeNum <= 90) {
      newStr += String.fromCharCode(codeNum + 32);
    } else {
      newStr += str[i]
    }
  }
  return newStr
}

// My test case
toLowerCase("HeLLo MY NaMe is sPonGEbOb")