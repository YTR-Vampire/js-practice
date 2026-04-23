const isPalindrome = (str) => {
    const clear = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clear === [...clear].reverse().join('');
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("a"));
