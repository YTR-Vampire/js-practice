function reverseString(str)
{
  let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {reversed += str[i];} return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString("Bhutan"));
console.log(reverseString("a"));
console.log(reverseString(""));