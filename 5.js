function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
      if (typeof name === 'string' && name.trim() !== '') {
        const greetingMessage = `Hello, ${name}!`;
        resolve(greetingMessage);
      } else {
        reject(new Error('Invalid name. Please provide a non-empty string.'));
      }
    });
  }
  
  // Example usage:
  const personName = 'John';
  
  // Call the function and handle the Promise
  greetWithPromise(personName)
    .then(greeting => {
      console.log(greeting); // Output: Hello, John!
    })
    .catch(error => {
      console.error(error.message);
    });
  