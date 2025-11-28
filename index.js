// Word Guesser
// Given two strings of the same length, a secret word and a guess, compare the guess to the secret word using the following rules:

// The secret word and guess will only consist of uppercase letters ("A" to "Z");
// For each letter in the guess, replace it with a number according to how it matches the secret word:
// "2" if the letter is in the secret word and in the correct position.
// "1" if the letter is in the secret word but in the wrong position.
// "0" if the letter is not in the secret word.
// Each letter in the secret word can be used at most once.
// Exact matches ("2") are assigned first, then partial matches ("1") are assigned from left to right for remaining letters.
// If a letter occurs multiple times in the guess, it can only match as many times as it appears in the secret word.
// For example, given a secret word of "APPLE" and a guess of "POPPA", return "10201":

// The first "P" is not in the correct location ("1"), the "O" isn't in the secret word ("0"), the second "P" is in the correct location ("2"), the third "P" is a zero ("0") because the two "P"'s in the secret word have been used, and the "A" is not in the correct location ("1").

function compare(word, guess) {
  console.log('This is the secret word: ', word, 'This is the guess: ', guess);
  // create two arrays
  const secretArray = word.split('');
  const guessArray = guess.split('');

  // run through arrays to compare
  function compareArrays(a, b) {
    let counter = [];
    for (let i = 0; i <= a.length; i++) {
      // if match push("2")
      if (a[i] === b[i]) {
        counter.push('2');
      }
      // if not match check if array contains letter
      else if (a.includes(b[i])) {
        counter.push('1');
        // If a letter occurs multiple times in the guess, it can only match as many times as it appears in the secret word.
      } else {
        // if no match and doesnt contain push("0")
        counter.push('0');
      }
    }
    return counter;
  }

  const test = compareArrays(secretArray, guessArray);
  console.log('This is the test string: ', test);
  // if yes push("1")
  // return string

  return word;
}

// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.
