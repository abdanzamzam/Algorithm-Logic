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

// 2. Use Recursion to Create a Countdown

/**
 * Notes:
 * - countdown(-1) should return an empty array.
 * - countdown(10) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 * - countdown(5) should return [5, 4, 3, 2, 1]
 * - Your code should not rely on any kind of loops (for, while or higher order functions such as forEach, map, filter, and reduce).
 * - You should use recursion to solve this problem.
 */

// Code:

// Only change code below this line
function countdown(n) {
  return;
}
// Only change code above this line

// Solution 1
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// Solution 2
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}

// Solution 3
function countdown(n) {
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

// Solution 4
function countdown(n) {
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}
