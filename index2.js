//on Date 03-03-24

// ~~~ Question 1 ~~
///     method 1
const sumPrimeNumber = (number) => {
  if (number < 2) return 0;
  let sumPrime = 0;
  for (let i = 2; i <= number; i++) {
    let countFactor = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        ++countFactor;
      }
    }
    if (countFactor === 2) {
      sumPrime = sumPrime + i;
    }
  }
  return sumPrime;
};
// console.log(sumPrimeNumber(6));
// console.log(sumPrimeNumber(7));
// console.log(sumPrimeNumber(8));
// console.log(sumPrimeNumber(9));

///     method 2 improve performance
const sumPrime = (number) => {
  if (number < 2) return 0;
  let result = 2;
  for (let i = 2; i <= number; i++) {
    if (i % 2 !== 0) {
      let counter = 0;
      for (let j = 3; j <= i; j++) {
        if (i % j === 0) {
          counter++;
        }
        if (counter === 2) break;
      }
      if (counter === 1) result += i;
    }
  }
  return result;
};
// console.log(sumPrime(13));
// console.log(sumPrime(7));
// console.log(sumPrime(8));
// console.log(sumPrime(9));

// ~~~ Question 2 ~~
const sumOfTwoInArray = (array, targetNum) => {
  let output = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetNum) {
        output = true;
        return output;
      }
    }
  }
  return output;
};
// console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 18));
// console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 8));

// ~~~ Question 3 ~~
const arrangeInAsc = (array) => {
  //Get odd array and even array
  let oddArr = [];
  let evenArr = [];
  array.map((item) => {
    item % 2 === 0 ? evenArr.push(item) : oddArr.push(item);
  });

  // Arrange each array in ascending order
  oddArr.sort((a, b) => a - b);
  evenArr.sort((a, b) => a - b);

  //check whether the order is ascending
  //   console.log(oddArr);
  //   console.log(evenArr);

  //Merge the two arrays starting with the odd array
  return [...oddArr, ...evenArr];
};
// console.log(arrangeInAsc([4, 2, 5, 7, 1, 6]));

// ~~~ Question 4 ~~
const largestNumber = (nums) => {
  // Custom comparator function for sorting
  const compare = (a, b) => {
    const num1 = `${a}${b}`;
    const num2 = `${b}${a}`;

    // Compare num2 with num1 because we want larger numbers to appear first
    return num2.localeCompare(num1);
  };

  // Sort the array using the custom comparator
  nums.sort(compare);

  return nums.join("");
};

// Example usage
console.log(largestNumber([10, 2, 13, 7]));
console.log(largestNumber([102, 45, 13, 9]));
console.log(largestNumber([102, 45, 13, 9]));
console.log(largestNumber([502, 30, 85, 3, 32, 30]));
