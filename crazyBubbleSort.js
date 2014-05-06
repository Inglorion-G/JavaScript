var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function askLessThan(el1, el2, callback) {
  reader.question("Is " + el1 + " less than " + el2 + "?", function(answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function performSortPass(arr, i, madeAnySwaps, callback) {
  if (i < arr.length - 1) {
    askLessThan( arr[i], arr[i + 1], function (lessThan) {
      if (lessThan === false) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }

      performSortPass(arr, i + 1, madeAnySwaps, callback);
    });
  } else if (i === (arr.length - 1)) {
    callback(madeAnySwaps);
  }
}

function crazyBubbleSort(arr, sortCompletionCallback) {

  function sortPassCallback (madeAnySwaps) {
    if (madeAnySwaps === true) {
      performSortPass(arr, 0, false, sortPassCallback);
    } else {
      sortCompletionCallback(arr);
    }
  }

  sortPassCallback(true);
}

crazyBubbleSort([3, 2, 1], function (arr) { console.log(arr) });