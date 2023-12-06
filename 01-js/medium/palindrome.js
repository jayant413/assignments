/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, '');

  let s = 0, e = str.length - 1;

  while (s <= e) {
    if (str[s] !== str[e]) {
      return false;
    }
    else s++, e--;
  }
  return true;
}

module.exports = isPalindrome;
