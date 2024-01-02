function ageInDays(person) {
    // Concatenate first name and last name
    const fullName = `${person.firstName} ${person.lastName}`;
  
    // Calculate age in days
    const ageInDays = person.age * 365; // Assuming 365 days in a year
  
    // Define the callback function
    function logMessage() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
  
    // Return the callback function
    return logMessage;
  }
  
  // Example usage:
  const personData = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  
  // Call the function with the person data
  const logMessageCallback = ageInDays(personData);
  
  // Call the callback function to log the message
  logMessageCallback(); // Output: The person's full name is John Doe and their age in days is 10950.
  