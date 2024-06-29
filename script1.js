1. Do the below programs in anonymous function & IIFE

a. Print odd numbers in an array

const printOddNumbers = function(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
};



IIFE:

(function(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
})([1, 2, 3, 4, 5]); // Immediately prints 1, 3, 5

b. Convert all the strings to title caps in a string array
Anonymous Function:


const convertToTitleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};


IIFE:

const titleCapsArray = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
})(["hello", "world"]); // Immediately returns ["Hello", "World"]

console.log(titleCapsArray);

c. Sum of all numbers in an array
Anonymous Function:


const sumArray = function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
};


IIFE:


const sum = (function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
})([1, 2, 3, 4, 5]); // Immediately returns 15

console.log(sum);
d. Return all the prime numbers in an array
Anonymous Function:


const findPrimes = function(arr) {
    const isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    return arr.filter(num => isPrime(num));
};


IIFE:


const primes = (function(arr) {
    const isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    return arr.filter(num => isPrime(num));
})([1, 2, 3, 4, 5, 6]); // Immediately returns [2, 3, 5]

console.log(primes);
e. Return all the palindromes in an array
Anonymous Function:


const findPalindromes = function(arr) {
    const isPalindrome = str => str === str.split('').reverse().join('');

    return arr.filter(str => isPalindrome(str));
};


IIFE:


const palindromes = (function(arr) {
    const isPalindrome = str => str === str.split('').reverse().join('');

    return arr.filter(str => isPalindrome(str));
})(["madam", "hello", "racecar"]); // Immediately returns ["madam", "racecar"]

console.log(palindromes);
f. Return median of two sorted arrays of the same size
Anonymous Function:

const findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

IIFE:

const median = (function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})([1, 3], [2, 4]); // Immediately returns 2.5

console.log(median);
g. Remove duplicates from an array
Anonymous Function:


const removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
};


IIFE:


const uniqueArray = (function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
})([1, 2, 2, 3, 4, 4, 5]); // Immediately returns [1, 2, 3, 4, 5]

console.log(uniqueArray);
h. Rotate an array by k times
Anonymous Function:


const rotateArray = function(arr, k) {
    const n = arr.length;
    k = k % n;
    const rotated = [...arr.slice(n - k), ...arr.slice(0, n - k)];
    return rotated;
};


IIFE:

const rotatedArray = (function(arr, k) {
    const n = arr.length;
    k = k % n;
    const rotated = [...arr.slice(n - k), ...arr.slice(0, n - k)];
    return rotated;
})([1, 2, 3, 4, 5], 2); // Immediately returns [4, 5, 1, 2, 3]

console.log(rotatedArray);