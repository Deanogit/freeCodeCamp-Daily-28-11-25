// // Word Guesser
// // // Given two strings of the same length, a secret word and a guess, compare the guess to the secret word using the following rules:

// // // The secret word and guess will only consist of uppercase letters ("A" to "Z");
// // // For each letter in the guess, replace it with a number according to how it matches the secret word:
// // // "2" if the letter is in the secret word and in the correct position.
// // // "1" if the letter is in the secret word but in the wrong position.
// // // "0" if the letter is not in the secret word.
// // // Each letter in the secret word can be used at most once.
// // // Exact matches ("2") are assigned first, then partial matches ("1") are assigned from left to right for remaining letters.
// // // If a letter occurs multiple times in the guess, it can only match as many times as it appears in the secret word.
// // // For example, given a secret word of "APPLE" and a guess of "POPPA", return "10201":

// // // The first "P" is not in the correct location ("1"), the "O" isn't in the secret word ("0"), the second "P" is in the correct location ("2"), the third "P" is a zero ("0") because the two "P"'s in the secret word have been used, and the "A" is not in the correct location ("1").

// // function compare(word, guess) {
// //   console.log('This is the secret word: ', word, 'This is the guess: ', guess);
// //   // create two arrays
// //   const secretArray = word.split('');
// //   const guessArray = guess.split('');

// //   // run through arrays to compare
// //   function compareArrays(a, b) {
// //     let counter = [];
// //     // use a third counter to subtract number of letters in the guess from those in the secret?
// //     let letterCounter = [];

// //     let checkA = [];
// //     let checkB = [];
// //     for (let i = 0; i < a.length - 1; i++) {
// //       console.log('This is a: ', a[i], 'This is b: ', b[i]);
// //       // if match push("2")
// //       if (a[i] === b[i]) {
// //         console.log('Pushing two');
// //         counter.push('2');
// //       }
// //       // if not match check if array contains letter
// //       // and number of times in guess does not exceed number of times in secret
// //       else if (a.includes(b[i])) {
// //         // check number of instances
// //         checkA = findLetterInstances(a, b[i]);
// //         letterCounter = findLetterInstances(a, b[i]);
// //         checkB = findLetterInstances(b, b[i]);
// //         console.log('CheckA', checkA);
// //         console.log('CheckB', checkB);
// //         if (checkB.length > checkA.length) {
// //           console.log('Repeated too many times');
// //           console.log('Pushing zero');
// //           counter.push('0');
// //         }
// //         console.log('Pushing one');
// //         counter.push('1');
// //         // If a letter occurs multiple times in the guess, it can only match as many times as it appears in the secret word.
// //         // } else {
// //         // if no match and doesnt contain push("0")
// //         //counter.push("0")
// //       }
// //     }
// //     return counter;
// //   }

// //   const test = compareArrays(secretArray, guessArray);
// //   console.log('This is the test string: ', test);
// //   // if yes push("1")
// //   // return string

// //   return word;
// // }

// // // Check how many times a letter exists in an array
// // function findLetterInstances(a, l) {
// //   const counter = [];
// //   for (let i = 0; i <= a.length; i++) {
// //     if (a[i] === l) {
// //       counter.push(l);
// //     }
// //   }
// //   return counter;
// // }

// // // The includes() method returns true if an array contains a specified value.
// // // The includes() method returns false if the value is not found.
// // // The includes() method is case sensitive.

// // function compare(word, guess) {
// //   console.log("This is the secret: ", word, "This is the guess: ", guess)
// // create arrays
// //  const secretArr = word.split("");
// //  const guessArr = guess.split("");
// //  const guessCounter = [];
// //  const secretCounter = [];
// //   console.log("This is secretArr: ", secretArr, "This is guessArr: ", guessArr);
// // check if letter in the guess repeats more times than secret
// //  for ( let i = 0; i <= secretArr.length - 1; i++) {
// // loop through and push to counters
// //     guessCounter.push(guessArr[i])
// //     secretCounter.push(secretArr[i])
// // check if guessCounter has more guessArr[i] than secret
// //   if (secretArr.includes(guessArr[i])) {
// //      console.log("Secret includes: ", guessArr[i])
// //     console.log("SecretCounter", secretCounter)
// //     console.log("GuessCounter: ", guessCounter)
// //   }

// // }

// // replace repeated letter with "0"

// //}

// // start from scratch working with strings, array and objects
// function compare(word, guess) {
//   // take the string, create an array with an index
//   function generateObj(str, name) {
//     const arr = [];
//     const objStr = '';
//     let counter = 0;
//     for (let i = 0; i <= str.length - 1; i++) {
//       arr.push(counter);
//       counter++;
//       arr.push(str.charAt(i));
//       console.log(str.charAt(i));
//       objStr.concat(str.charAt(i));
//     }
//     console.log(arr);
//     console.log(arr.join());
//     const obj = Object.entries();
//   }
//   generateObj(word);
//   return word;
// }

// // let str='{"name":"Josh","age":17}'

// //using the json.parse() method
// // let objFromStr=JSON.parse(str);

// //printing the object
// // console.log(objFromStr);

// // function countChars(str) {
// //   const charCount = {}; // Use an object initializer to create an empty object [4]
// //  for (let i = 0; i < str.length; i++) {
// //    const char = str[i];
// // Check if the character is already a key in the object
// //    if (charCount[char]) {
// //      charCount[char]++; // If it exists, increment its value
// //    } else {
// //      charCount[char] = 1; // If it doesn't, add it as a new key with a value of 1
// //    }
// //  }
// //  return charCount;
// // }

// // const myString = "hello world";
// // const myObject = countChars(myString);

// // console.log(myObject);
// // Expected output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

function compare(word, guess) {
  function countChars(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      // check if char is already a key in the object
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    return charCount;
  }
  const secretObj = countChars(word);
  const guessObj = countChars(guess);
  console.log('This is the secret Obj: ', secretObj);
  // returns  { A: 1, P: 2, L: 1, E: 1 }
  console.log('This is the guess: ', guessObj);
  // returns  { P: 3, O: 1, A: 1 }
}
