// DESCRIPTION:
// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

// Examples
// "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
// "h-o" ➞ "hijklmno"
// "Q-Z" ➞ "QRSTUVWXYZ"
// "J-J" ➞ "J"
// Notes
// A hyphen will separate the two letters in the string.
// You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).


// SOLUTION:

function gimmeTheLetters(sp) {
    const [start, end] = sp.split('-')
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0)
      let result = '';
        for (let i = startCode; i <= endCode; i++) {
          result += String.fromCharCode(i);
        }
    
    return result;
  }