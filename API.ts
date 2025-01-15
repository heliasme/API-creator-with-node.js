import  express from 'express'
import cors from 'cors'; 
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Book type definition
type Book = {
    title: string;
    author: string;
    yearPublished: number;
    isAvailable: boolean;
};

const library: Book[] = [];

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Library API!');
});

// API endpoint to add a book
app.get('/api/books', (req, res) => {
    const book: Book = req.body;
    library.push(book);
    res.status(201).send('Book added to library.');
});

// API endpoint to list available books
app.get('/api/books', (req, res) => {
    const availableBooks = library.filter(book => book.isAvailable).map(book => book.title);
    res.json(availableBooks);
});

// API endpoint to borrow a book
app.get('/api/books/borrow/:title', (req, res) => {
    const { title } = req.params;
    const book = library.find(book => book.title === title);
    if (book && book.isAvailable) {
        book.isAvailable = false;
        res.send('Book borrowed.');
    } else {
        res.status(404).send('Book not found or already borrowed.');
    }
});

// API endpoint to return a book
app.get('/api/books/return/:title', (req, res) => {
    const { title } = req.params;
    const book = library.find(book => book.title === title);
    if (book && !book.isAvailable) {
        book.isAvailable = true;
        res.send('Book returned.');
    } else {
        res.status(404).send('Book not found or already available.');
    }
});

// API endpoint to find books by author
app.get('/api/books/author/:author', (req, res) => {
    const { author } = req.params;
    const booksByAuthor = library.filter(book => book.author === author).map(book => book.title);
    res.json(booksByAuthor);
});

app.listen(port, () => {
    console.log(`Library API running at http://localhost:${port}`);
});
