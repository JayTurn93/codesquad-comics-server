// const booksData = require("../data/books");
const Book = require("../models/bookModel");

const getAllBooks = async (request, response, next) => {

    try {
        // const books = booksData;
        const books = await Book.find({});
        return response.status(200).json({
            success: {message: "We got all the books."},
            data: {books},
        });
    } catch (error) {
        return next(error)
    };
};

const getBook = async (request, response, next) => {
    const {_id} = request.params;

    try {
        // const foundBook = booksData.find((book) => book._id === _id);

        if (!_id) {
            throw new Error("ID required.")
        }
        const book = Book.findById(_id);
        if (!book) {
            throw new Error("Book not found.")
        }
        return response.status(200).json({
            success: {message: "We have located the book by ID"},
            data:{book},
            statusCode: 200,
        });
    } catch (error) {
        return next(error)
    };
};

const createBook = async (request, response, next) => {
    const {title, author, publisher, genre, pages, rating, synopsis, imageUrl} = request.body;
    
    try {
        if (!title || !author || !pages) {
            throw new Error("Enter missing fields.")
        }
        const newBook = new Book({
            title, 
            author,
            publisher,
            genre,
            pages,
            rating,
            synopsis,
            imageUrl,
        });
        await newBook.save();
        return response.status(201).json({
            success: {message: "We added a new comic!"},
            data: {newBook},
            statusCode: 201,
        });
    } catch (error) {
        return next(error)
    };
};

const updateBook = async (request, response, next) => {
    const {_id} = request.params;
    const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } = request.body;
    try {
        if (!title || !author || !pages) {
          throw new Error("Enter missing fields.")
        }
        const updatedBook = await Book.findByIdAndUpdate(_id,
            {
                $set: {
                  title,
                  author,
                  publisher,
                  genre,
                  pages,
                  rating,
                  synopsis,
                  imageUrl,
                },
            },
            {new: true}
        );
        if (!updatedBook) {
            throw new Error("Book not updated.")
        }
        return response.status(201).json({
            success: {message: "We updated the comic!"},
            data: {updatedBook},
            statusCode: 201,
        });
    } catch (error) {
        return next(error)
    };
};

const deleteBook = async (request, response, next) => {
    const {_id} = request.params;
    try {
        if (!_id) {
            throw new Error("ID required.")
        }
        // const books = booksData.filter((book) => book._id !== _id);
        await Book.findByIdAndDelete(_id);
        
        return response.status(200).json({
            success:{message: "We have deleted that comic."},
            statusCode: 200,
        });
    } catch (error) {
        return next(error)
    };
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
