// CHALLENGE 1: Sum all numbers in a range
// Tests for sumAll()
export const sumAll = arr => {
  let upperLim = Math.max(...arr);
  let lowerLim = Math.min(...arr);
  let allNums = [];
  for (var i = lowerLim; i <= upperLim; i++) {
    allNums.push(i);
  }
  let total = allNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  return total;
};

// CHALLENGE 2: Diff Two Arrays
// Test for diffArray ==> compare 2 arrays and make array of differences
export const diffArray = (arr1, arr2) => {
  let newArr = [];
  let diffArr1 = arr1.filter(num => {
    if (arr2.indexOf(num) < 0) {
      return num;
    }
  });
  let diffArr2 = arr2.filter(num => {
    if (arr1.indexOf(num) < 0) {
      return num;
    }
  });

  newArr = diffArr1.concat(diffArr2);
  return newArr;
};

// CHALLENGE 3: Roman Numeral Converter
// Convert any positive number to a Roman Numeral

const getThous = num => {
  let placeHolder = Math.floor(num / 1000);
  return 'M'.repeat(placeHolder);
};

const getHuns = num => {
  let placeHolder = Math.floor(num / 100);
  if (placeHolder <= 3) {
    return 'C'.repeat(placeHolder);
  } else if (placeHolder === 4) {
    return 'CD';
  } else if (placeHolder === 5) {
    return 'D';
  } else if (placeHolder <= 8) {
    return 'D' + 'C'.repeat(placeHolder - 5);
  } else {
    return 'CM';
  }
};

const getTens = num => {
  let placeHolder = Math.floor(num / 10);
  if (placeHolder <= 3) {
    return 'X'.repeat(placeHolder);
  } else if (placeHolder === 4) {
    return 'XL';
  } else if (placeHolder === 5) {
    return 'L';
  } else if (placeHolder <= 8) {
    return 'L' + 'X'.repeat(placeHolder - 5);
  } else {
    return 'XC';
  }
};

const getSings = num => {
  if (num <= 3) {
    return 'I'.repeat(num);
  } else if (num === 4) {
    return 'IV';
  } else if (num === 5) {
    return 'V';
  } else if (num <= 8) {
    return 'V' + 'I'.repeat(num - 5);
  } else {
    return 'IX';
  }
};

export const convertToRoman = num => {
  let numArray = [];
  while (num > 0) {
    if (num >= 1000) {
      numArray.push(getThous(num));
      num = num % 1000;
    } else if (num >= 100 && num < 1000) {
      numArray.push(getHuns(num));
      num = num % 100;
    } else if (num >= 10 && num < 100) {
      numArray.push(getTens(num));
      num = num % 10;
    } else {
      numArray.push(getSings(num));
      num = Math.floor(num / 10);
    }
  }
  num = numArray.join('');
  return num;
};

// CHALLENGE 4: Wherefor art thou
// Look through an array of objects and find the matching objects
// to a provided object's key/value pair
export const whatIsInAName = (collection, source) => {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  collection.map(item => {
    let same = false;
    for (var key in item) {
      for (var k in source) {
        if (key === k && item[key] === source[k]) {
          same = true;
        } else {
          same = false;
        }
      }
      if (same) {
        arr.push(item);
        same = false;
      }
    }
  });
  // Only change code above this line
  return arr;
};

// CHALLENGE 5: Search and Replace
// Find a string in a larger string and replace it with a provided string.
// if the original string to be replaced is capitalized, then the replacement
// string will need to be capitalized too
export const myReplace = (str, before, after) => {
  let newAfter = after;
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    newAfter = after.split('');
    newAfter[0] = newAfter[0].toUpperCase();
    newAfter = newAfter.join('');
  }
  let re = new RegExp(before);
  str = str.replace(re, newAfter);
  return str;
};

// CHALLENGE 6: Pig Latin
// translate a word into pig latin using the standard rules
export const translatePigLatin = str => {
  let newStr = str.split('');
  let first = newStr[0].toLowerCase();
  let chunk = '';
  if (
    first === 'a' ||
    first === 'e' ||
    first === 'i' ||
    first === 'o' ||
    first === 'u'
  ) {
    newStr.push('way');
  } else if (first === 'c') {
    if (str[1].toLowerCase() === 'h') {
      chunk = newStr.splice(0, 2).join('');
      newStr.push(chunk + 'ay');
    }
  } else if (first === 's') {
    if (
      str[1].toLowerCase() === 'h' ||
      str[1].toLowerCase() === 'm' ||
      str[1].toLowerCase() === 't'
    ) {
      chunk = newStr.splice(0, 2).join('');
      newStr.push(chunk + 'ay');
    }
  } else if (first === 'g') {
    if (str[1].toLowerCase() === 'l') {
      chunk = newStr.splice(0, 2).join('');
      newStr.push(chunk + 'ay');
    }
  }
  if (str === newStr.join('')) {
    // not sure why else {} wouldn't work here
    let move = newStr.shift();
    newStr.push(move + 'ay');
  }
  str = newStr.join('');
  return str;
};

// CHALLENGE 7: DNA Pairing
// create a new array matching the provided base with its pair
export const pairElement = str => {
  const handleCG = el => {
    return el.toUpperCase() === 'C' ? 'G' : 'C';
  };

  const handleAT = el => {
    return el.toUpperCase() === 'A' ? 'T' : 'A';
  };
  let arr = str.split('');
  let newPairs = [];
  arr.map((el, i) => {
    if (el.toUpperCase() === 'C' || el.toUpperCase() === 'G') {
      newPairs.push([el, handleCG(el)]);
    } else if (el.toUpperCase() === 'A' || el.toUpperCase() === 'T') {
      newPairs.push([el, handleAT(el)]);
    }
  });

  return newPairs;
};

//CHALLENGE 8: Missing Letters
// Find the missing letter in a provided string of
// consecutive alphabetical letters.

export const fearNotLetter = str => {
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  let firstLetter = str.charAt(0);
  let start = alphabet.indexOf(firstLetter);
  let chunk = alphabet.slice(start, str.length + 1);
  let compChunk = chunk.join('');
  if (compChunk === str) {
    str = undefined;
    return str;
  } else {
    let flag = true;
    let strArray = str.split('');
    for (var i = 0; i < chunk.length; i++) {
      if (chunk[i] !== strArray[i]) {
        return chunk[i];
      }
    }
  } // end else
};

// CHALLENGE 9: Boo Who?
// This should provide an accurate test for boolean values.
export const booWho = bool => {
  let boolVal = '';
  if (bool === null) {
    return false;
  } else if (isNaN(bool)) {
    return false;
  } else if (bool === true) {
    return true;
  }

  boolVal = Boolean(bool).valueOf();
  return !boolVal;
};

// CHALLENGE 10: Sorted Union
// sorts 2 arrays and returns a new array of unique values

// NOTE: This one works at FCC, but is locking up Jest for some reason.

// export const uniteUnique = arr => {
//   let newArr = Array.from(arguments);
//   let combArr = [];
//   for (let i = 0; i < newArr.length; i++) {
//     combArr = combArr.concat(newArr[i]);
//   }
//   for (let i = 0; i < combArr.length; i++) {
//     for (let j = i + 1; j < combArr.length; j++) {
//       if (combArr[i] === combArr[j]) {
//         combArr.splice(j, 1);
//       }
//     }
//   }
//   return combArr;
// };

// CHALLENGE 11: Convert HTML Entities
// Should convert strings with their correct symbol matches
// HTML conversion with Jest is messing this up
// export const convertHTML = str => {
//   // &colon;&rpar;
//   let strArray = str.split('');
//   let newArray = strArray.map(el => {
//     switch (el) {
//       case '&':
//         return '&amp;';
//       case '<':
//         return '&lt;';
//       case '>':
//         return '&gt;';
//       case '"':
//         return '&quot;';
//       case "'":
//         return '&apos;';
//       default:
//         return el;
//     }
//   });
//   str = newArray.join('');
//   return str;
// };

// CHALLENGE 12: Spinal Tap Case
// Convert a string to spinal tap case
export const spinalCase = str => {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.split(/[^a-zA-Z]/);
  str = str.join('-');
  str = str.replace(/[a-z](?=[A-Z])/g, '$&-').toLowerCase();
  return str;
};

// CHALLENGE 13: Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the
// sum of all odd Fibonacci numbers that are less than or equal to num.
export const sumFibs = num => {
  let fib = 1;
  let prev = 1;
  let newFib = 0;
  const isOdd = n => {
    return n % 2 !== 0 ? true : false;
  };
  let sum = 0;
  while (newFib <= num) {
    prev = fib;
    fib = newFib;
    if (isOdd(fib)) {
      sum += fib;
    }
    newFib = prev + fib;
  }

  return sum;
};

// CHALLENGE 14: Sum all Primes
// Sum all prime numbers up to and including the provided number
export const sumPrimes = num => {
  let sum = 0;
  const isPrime = n => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  };
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

// CHALLENGE 15: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be
// evenly divided by both, as well as by all sequential numbers in the range
// between these parameters.
export const smallestCommons = arr => {
  let upperLim = Math.max(...arr);
  let lowerLim = Math.min(...arr);
  let allNums = [];
  for (var i = lowerLim; i <= upperLim; i++) {
    allNums.push(i);
  }

  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const lcm = (a, b) => {
    return a * b / gcd(a, b);
  };

  let finalLCM = lowerLim;
  allNums.forEach(n => {
    finalLCM = lcm(n, finalLCM);
  });

  return finalLCM;
};

// CHALLENGE 16: Finders Keepers
// Create a function that looks through an array (first argument) and returns the
// first element in the array that passes a truth test (second argument).
export const findElement = (arr, func) => {
  var num = 0;
  num = arr.filter(n => {
    return func(n);
  });
  return num[0];
};
