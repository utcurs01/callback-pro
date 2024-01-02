function doubleArrayWithCallback(arr, callback) {
    if (!Array.isArray(arr) || typeof callback !== 'function') {
      throw new Error('Invalid input. Please provide an array and a callback function.');
    }
    const doubledArray = arr.map(callback);
  
    return doubledArray;
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  
  const doubleCallback = (num) => num * 2;
  
  const resultArray = doubleArrayWithCallback(inputArray, doubleCallback);
  
  console.log(resultArray); // Output: [2, 4, 6, 8, 10]
  