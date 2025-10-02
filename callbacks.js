// callbacks.js

function delayedSuccess(callback) {
  setTimeout(() => {
    callback(null, 'delayed success!');
  }, 500);
}

function delayedException(callback) {
  setTimeout(() => {
    callback(new Error('delayed exception!'), null); 
  }, 500);
}

module.exports = { delayedSuccess, delayedException };
