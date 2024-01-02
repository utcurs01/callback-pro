function extractTitlesAndLogAlphabetically(books, callback) {
    // Use map to create a new list containing only the titles
    const titles = books.map(book => book.title);
  
    // Sort the titles alphabetically
    const sortedTitles = titles.sort();
  
    // Pass the sorted titles to the callback function
    callback(sortedTitles);
  }
  
  // Example usage:
  const bookList = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
  ];
  
  // Define the callback function
  function logTitles(titles) {
    console.log("Titles in alphabetical order:");
    titles.forEach(title => console.log(title));
  }
  
  // Call the program with the book list and callback function
  extractTitlesAndLogAlphabetically(bookList, logTitles);
  