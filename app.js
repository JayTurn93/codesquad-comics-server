const express = require("express");
const app = express();
const PORT = 8080;
const morgan = require("morgan")
const path = require("node:path");
const helmet = require("helmet");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes")

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

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
    console.log("(http://localhost:3000/")
});