const booksData = require("../data/books");


const getAllBooks = async (request, response, next) => {
    
    try {
        const books = booksData;
        return response.status(200).json({
            success: {message: "We got all the books."},
            data: {books: books},
            statusCode: 200,
        });
    } catch (error) {
        return response.status(400).json({
            error: {message: "There was a problem retrieving the books"},
            statusCode: 400,
        });
    }
}

const getBook = async (request, response, next) => {
    const {_id} = request.params;

    try {
        const foundBook = booksData.find((book) => book._id === _id);
        return response.status(200).json({
            success: {message: "We have located the book by ID"},
            data:{data: foundBook},
            statusCode: 200,
        });
    } catch (error) {
        return response.status(400).json({
            error: {message: "Error trying to get the book by ID"},
            statusCode: 400,
        });
    };
};

const createBook = async (request, response, next) => {
    const {title, author, publisher, genre, pages, rating, synopsis, imageUrl} = request.body;
    const newBook = {
        title, 
        author,
        publisher,
        genre,
        pages,
        rating,
        synopsis,
        imageUrl,
    };

    try {
    
    return response.status(201).json({
        success: {message: "We added a new comic!"},
        data: {newBook},
        statusCode: 201,
    });
    } catch (error) {
        return response.status(400).json({
            error: {message: "There was a problem creating the comic"},
            statusCode: 400,
        });
    };
};

const updateBook = async (request, response, next) => {
    const {_id} = request.params;
    const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } = request.body;
    
    
    try {
        const updatedBook = {
            title,
            author,
            publisher,
            genre,
            pages,
            rating,
            synopsis,
            imageUrl,
        };
        
        return response.status(201).json({
            success: {message: "We updated the comic!"},
            data: {updatedBook},
            statusCode: 201,
        });
    } catch (error) {
        return response.status(400).json({
            error: {message: "Theres a problem updating the comic"},
            statusCode: 400,
        });
    };
};

const deleteBook = async (request, response, next) => {
    const {_id} = request.params;

    try {
        const books = booksData.filter((book) => book._id !== _id);
        
        return response.status(200).json({
            success:{message: "We have deleted that comic."},
            data: {books},
            statusCode: 200,
        });
    } catch (error) {
        return response.status(400).json({
            error: {message: "There was a problem deleting the comci."},
            statusCode: 400,
        });
    };
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
