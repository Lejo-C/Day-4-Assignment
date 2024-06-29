1.Do the below programs in arrow functions.

a. Print odd numbers in an array:

const printOddNumbers = (arr) => arr.filter(num => num % 2 !== 0).forEach(num => console.log(num));

b. Convert all the strings to title caps in a string array:

const convertToTitleCaps = (arr) => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

c. Sum of all numbers in an array:

const sumArray = (arr) => arr.reduce((acc, num) => acc + num, 0);

d. Return all the prime numbers in an array:

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true; // 2 is a prime number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimeNumbers = (arr) => arr.filter(num => isPrime(num));

e. Return all the palindromes in an array:

const isPalindrome = (str) => {
  const len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};


