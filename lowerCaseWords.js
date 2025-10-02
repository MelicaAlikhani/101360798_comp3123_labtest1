// Question 1: ES6 Features

function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    // Validate that the input is an array
    if (!Array.isArray(mixedArray)) {
      return reject(new Error('Input provided is not an array'));
    }

    // Filter the array to keep only strings and convert them to lowercase
    const words = mixedArray
      .filter(item => typeof item === 'string')
      .map(word => word.toLowerCase());

    // If there are no string elements, reject the promise
    if (words.length === 0) {
      return reject(new Error('No string elements found in the array'));
    }

    // Resolve the promise with the array of lowercase words
    return resolve(words);
  });
}

const exampleArray = ['PIZZA', 10, true, 'Tastes', 99, 'Great', 'cODing'];
lowerCaseWords(exampleArray)
  .then((result) => {
    console.log('Resolved with:', result);
  })
  .catch((error) => {
    console.error('Rejected with:', error.message);
  });


module.exports = lowerCaseWords;
