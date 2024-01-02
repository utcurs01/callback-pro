function manipulateString(inputString) {
    // Convert characters to uppercase
    const manipulatedString = inputString.toUpperCase();
  
    // Define the callback function
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
  
    // Return the callback function
    return logString;
  }
  
  // Example usage:
  const inputText = "Hello, world!";
  
  // Call the function with the input string
  const logStringCallback = manipulateString(inputText);
  
  // Call the callback function to log the manipulated string
  logStringCallback(); // Output: The manipulated string is: HELLO, WORLD!
  