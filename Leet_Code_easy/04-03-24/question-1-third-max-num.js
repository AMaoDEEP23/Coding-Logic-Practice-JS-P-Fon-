// ~~~ Question 1 Third Max Number ~~~
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
//      Example 1:
// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

//      Example 2:
// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.

const thirdMaxNum = (numsArr) => {
  const setArr = [...new Set(numsArr)]; //new Set(numsArr) >>> output is Object type {}, then convert to array type using ...spread in []
  setArr.sort((a, b) => b - a); // Arrange the setArr in descending order
  if (setArr.length < 3) return setArr[0];
  else {
    return setArr[2];
  }
};

console.log(thirdMaxNum([1, 6, 6, 8, 9, 8, 8, 7, 3]));
