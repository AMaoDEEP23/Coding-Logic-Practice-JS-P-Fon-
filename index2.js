//on Date 03-03-24

// ~~~ Question 1 ~~
///     method 1
// const sumPrimeNumber = (number) => {
// if (number < 2) return 0;
//   let sumPrime = 0;
//   for (let i = 2; i <= number; i++) {
//     let countFactor = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         ++countFactor;
//       }
//     }
//     if (countFactor === 2) {
//       sumPrime = sumPrime + i;
//     }
//   }
//   return sumPrime;
// };
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
