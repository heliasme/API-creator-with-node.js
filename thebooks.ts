// Book type definition
type Book = {
    title: string;
    author: string;
    yearPublished: number;
    isAvailable: boolean;
};

// The books array
const library: Book[] = [];

// Add a book to the library
const addBook = (book: Book) => {
    library.push(book);
};

// List available books
const listAvailableBooks = () => {
    return library.filter(book => book.isAvailable).map(book => book.title);
};

// Borrow a book
const borrowBook = (title: string) => {
    const book = library.find(book => book.title === title);
    return book && book.isAvailable ? (book.isAvailable = false, true) : false;
};

// Return a book
const returnBook = (title: string) => {
    const book = library.find(book => book.title === title);
    if (book && !book.isAvailable) {
        book.isAvailable = true;
        return true;
    }
    return false;
};

// Find books by author
const findBooksByAuthor = (author: string) => {
    return library.filter(book => book.author === author).map(book => book.title);
};

// Sample books                                                                                                                                                                                                                                                                                                                                                       
const book1: Book = {
    title: '1984',
    author: 'George Orwell',
    yearPublished: 1949,
    isAvailable: true,
};

const book2: Book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    yearPublished: 1960,
    isAvailable: true,
};

const book3: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    yearPublished: 1925,
    isAvailable: false,
};

const book4: Book = {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    yearPublished: 1813,
    isAvailable: true,
};

// Add sample books to the library
addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);

// Test each function and print the results to the console
console.log('Available Books:', listAvailableBooks());
console.log('Borrow 1984:', borrowBook('1984'));
console.log('Return 1984:', returnBook('1984'));
console.log('Books by George Orwell:', findBooksByAuthor('George Orwell'));
