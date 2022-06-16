// 1. Use Recursion to Create a Range of Numbers

/**
 * Notes:
 * - Your function should return an array.
 * - Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).
 * - rangeOfNumbers should use recursion (call itself) to solve this challenge.
 * - rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
 * - rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
 * - rangeOfNumbers(4, 4) should return [4].
 */

// Code:
function rangeOfNumbers(startNum, endNum) {
  return [];
}

// Solution 1
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

// Solution 2
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

// Solution 3
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}
