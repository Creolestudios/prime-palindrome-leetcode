/**
 * @param {number} n
 * @return {number}
 */
function isPrime(x) {
  if (x < 2) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function isPalindrome(n) {
  let temp = n,
    reversed = 0;
  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return n === reversed;
}
var primePalindrome = function (n) {
  while (true) {
    if (isPalindrome(n) && isPrime(n)) {
      return n;
    }
    if (n > 1e7 && n < 1e8) {
      n = 1e8;
    }
    n++;
  }
};
