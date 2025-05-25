const express = require("express");
const morgan = require("morgan");
const path = require("node:path");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const PORT = 8080;

//-------------MIDDLEWARE---------------
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));
const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes");

//------------SEND ROUTES----------------
// app.get("/", (request, response, next) => {
//     response.send("This route points to the Home page")
// });

// app.get("/api/books", (request, response, next) => {
//     response.send("This will send all of the book data")
// });

// app.get("/api/books/:id", (request, response, next) => {
//     response.send("This will send a single book by its id")
// });

// app.get("/api/books/create/new", (request, response, next) => {
//     response.send("This will create a new book")
// });

// app.get("/api/books/update/:id", (request, response, next) => {
//     response.send("This will update a book by its id")
// });

// app.get("/api/books/delete/:id", (request, response, next) => {
//     response.send("This will delete a book by its id")
// });


//-------------REFACORED-----------------
app.get("/", (request, response, next) => {
    response.status(200).json({
        success: { message: "This route points to the Home page" },
        statusCode: 200,
      });
});
app.use("/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
    console.log(`(http://localhost:${PORT}/`)
});