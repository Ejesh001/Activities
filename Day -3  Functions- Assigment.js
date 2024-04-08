// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15];
a.forEach(function(a) {   
      if (a % 2 !== 0) {
        console.log(a);  
 } });
//  Convert all the strings to title caps in a string array
const strings = ["abcd", "efgh", "ijk"];
const titleCapsArray = strings.map(function(string) {
return string.replace(/\b\w/g, function(char) {
return char.toUpperCase();
});
});
console.log(titleCapsArray);
// Sum of all numbers in an array
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
(function() {
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(sum);
})();

// Return all the prime numbers in an array
(function() {
    var numbers = [1,2,3,4,5];
    var primes = [];
    var Prime = function(num) {
        if (num <= 1) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    for (var i = 0; i < numbers.length; i++) {
        if (Prime(numbers[i])) {
            primes.push(numbers[i]);
        }
    }

    console.log( primes);
})();
// Return all the palindromes in an array
const strings = ["madam", "racecar", "hello", "level", "world"]; 
const palindromes = strings.filter(function(string) {   
const reversed = string.split("").reverse().join("");   
return string === reversed; }); 
console.log(palindromes);
// Return median of two sorted arrays of the same size.
(function() {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];

    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);

    const median = (arr) => {
        const mid = Math.floor(arr.length / 2);
        return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
    };

    const result = median(mergedArray);
    console.log("Median:", result);
})();
// Remove duplicates from an array
(function() {
    const array = [1,2,3,4,4,5,5];

    const removeDuplicates = function(arr) {
        return arr.filter((value, index) => arr.indexOf(value) === index);
    };

    const result = removeDuplicates(array);
    console.log(result);
})();

// Rotate an array by k times
(function() {
    const array = [1, 2, 3, 4, 5];
    const k = 5;

    const rotateArray = (arr, k) => arr.slice(k % arr.length).concat(arr.slice(0, k % arr.length));

    const result = rotateArray(array, k);
    console.log(result);
})();

// Do the below programs in arrow functions
// Print odd numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(num => num % 2 !== 0);

oddNumbers.forEach(oddNumber => console.log(oddNumber));
// Convert all the strings to title caps in a string array
const strings = ["abcd", "efgh", "ijk"];

const titleCaps = strings.map(string => string.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));

console.log(titleCaps);
// Sum of all numbers in an array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Sum of numbers:", sum);
// Return all the prime numbers in an array
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = numbers.filter(num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

console.log(primeNumbers);
// Return all the palindromes in an array
const strings = ["madam", "racecar", "hello", "level", "world"];

const palindromes = strings.filter(str => str === str.split("").reverse().join(""));

console.log(palindromes);

