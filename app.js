const express = require("express");
const app = express();
const PORT = 8080;
const morgan = require("morgan")
const path = require("node:path");
const helmet = require("helmet");
const cors = require("cors");

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));

app.get("/", (request, response, next) => {
    response.status(200).json({
        success: { message: "This route points to the Home page" },
        statusCode: 200,
      });
});

app.get("/api/books", (request, response, next) => {
    response.status(200).json({
        success: { message: "This will send all of the book data" },
        statusCode: 200,
      });
});

app.get("/api/books/:id", (request, response, next) => {
    response.status(200).json({
        success: { message: "This will send a single book by its id" },
        statusCode: 200,
      });
});

app.get("/api/books/create/new", (request, response, next) => {
    response.status(200).json({
        success: { message: "This will create a new book" },
        statusCode: 200,
      });
});

app.get("/api/books/update/:id", (request, response, next) => {
    response.status(200).json({
        success: { message: "This will update a book by its id" },
        statusCode: 200,
      });
});

app.get("/api/books/delete/:id", (request, response, next) => {
    response.status(200).json({
        success: { message: "This will delete a book by its id" },
        statusCode: 200,
      });
});

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
    console.log("(http://localhost:3000/")
});