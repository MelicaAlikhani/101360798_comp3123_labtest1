// Question 2: Promises

const { delayedSuccess, delayedException } = require('./callbacks');

// Create a promise that resolves after 500ms
function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('promised success resolved after 500ms');
    }, 500);
  });
}

// Create a promise that rejects after 500ms
function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('promised error rejected after 500ms'));
    }, 500);
  });
}

// Function to handle the promises
function handlePromises() {
  // Call the resolved promise and handle the result
  resolvedPromise()
    .then((message) => {
      console.log('ResolvedPromise succeeded with:', message);
    })
    .catch((err) => {
      console.error('ResolvedPromise failed with:', err.message);
    });

  // Call the rejected promise and handle the result
  rejectedPromise()
    .then((message) => {
      console.log('RejectedPromise succeeded with:', message);
    })
    .catch((err) => {
      console.error('RejectedPromise failed with:', err.message);
    });
}

// callback functions 
function handleCallbacks() {
  delayedSuccess((err, msg) => {
    if (err) {
      console.error('delayedSuccess callback error:', err.message);
    } else {
      console.log('delayedSuccess callback message:', msg);
    }
  });

  delayedException((err, msg) => {
    if (err) {
      console.error('delayedException callback error:', err.message);
    } else {
      console.log('delayedException callback message:', msg);
    }
  });
}

// Execute the handlers output
handleCallbacks();
handlePromises();

// Export functions for testing 
module.exports = { resolvedPromise, rejectedPromise, handlePromises, handleCallbacks };
