const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect('mongodb+srv://jyturner93:PVnQKTmD1Pe9Ainj@cluster1.ashm13z.mongodb.net/codesquadComics?retryWrites=true&w=majority');
        console.log(`MongoDB database is connected.`);
    } catch (error) {
        console.error(`There was an error connection to the database: ${error}`);
    }
}

main();