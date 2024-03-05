// ~~~ Question 3 Largest Number At Least Twice of Others ~~~

// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.

const dominantIndex = (nums) => {
  let maxNum = 0;
  let indexMaxNum = 0;
  nums.map((each, index) => {
    if (each > maxNum) {
      maxNum = each;
      indexMaxNum = index;
    }
  });

  for (let each of nums) {
    if (each !== maxNum) {
      if (maxNum / each < 2) {
        indexMaxNum = -1;
        break;
      }
    }
  }
  return indexMaxNum;
};
console.log(dominantIndex([1, 2, 3, 4]));
console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 6, 7]));
console.log(dominantIndex([3, 6, 4, 15]));
