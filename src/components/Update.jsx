import { useEffect, useState } from 'react';
// import books from '../data/books';
import styles from "../App.module.css"
import { useParams, useNavigate } from "react-router-dom";



function Update() {
    const navigate = useNavigate();
    const url = "https://course-project-codesquad-comics-server.onrender.com/api/books/${bookId}"
    const { bookId } = useParams();
    // const id = "66b62a49-a8de-4914-ab3f-49fe0554c08a"
    const [book, setBook] = useState("");
    console.log("acivate") //checking before we start
    
    useEffect(() => {
        fetch(url, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            setBook(data.book)
        })
        .catch(console.error)

        // const theBook = books.find(books => books._id === id)
        // console.log("Check Up.")
        // localStorage.setItem("theBook", JSON.stringify(theBook));
        // // console.log(theBook)
        // setBook(theBook);
        // console.log("final test:", book)
        
    }, [])
    // console.log(book) //checkin to see if book stayed updated
    // const handleUpdate = (e) => {
    //     e.preventDefault()
    //     setBook(e.target.value)
    //     setBook(book)
        // book.author(e.target.value)
        // book.publisher(e.target.value)
        // book.genre(e.target.value)
        // book.pages(e.target.value)
        // book.rating(e.target.value)
        // console.log("book changing", book.title, book.pages, book.publisher)
    // }
    const handleSubmission = (e) => {
        const body = {
            title: e.target.title.value,
            author: e.target.author.value,
            publisher: e.target.publisher,
            genre: e.target.genre.value,
            pages: e.target.pages.value,
            rating: e.target.rating.value,
            synopsis: e.target.synopsis
          }
        fetch("https://course-project-codesquad-comics-server.onrender.com/api/books/edit/${bookId}", {method: "PUT", body: JSON.stringify(body)})
        .then(result => console.log(result))
        .then(data => setBook(data))
        .then(navigate("/admin"))
        .catch(error => console.log(error))
        
    }
    
    return (
      <div>
        <main className={styles.twotone}>
            <div className={styles.container}>
                <div>
                    <h1>UPDATE COMIC</h1>
                    <form  onSubmit={handleSubmission} >
                        <div className={styles.createcenter}>
                            <label htmlFor="title">Title:</label>
                            <input
                            type="text"
                            id="title"
                            name="title"/>
                        </div>
                        <div className={styles.createcenter}>
                            <label htmlFor="author">Author: </label>
                            <input
                            type="text"
                            id="author"
                            name="author"
                            value="author value stored in database" />
                        </div>
                        <div className={styles.createcenter}>
                            <label htmlFor="publisher">Publisher: </label>
                            <select name="publishers" id="publisher-select" >
                            <option value="BOOM! Box">BOOM! Box</option>
                            <option value="DC Comics">DC Comics</option>
                            <option value="Harry N. Abrams">Harry N. Abrams</option>
                            <option value="Icon Books">Icon Books</option>
                            <option value="Image Comics">Image Comics</option>
                            <option value="Marvel">Marvel</option>
                            <option value="Simon & Schuster">Simon & Schuster</option>
                            <option value="Top Shelf Productions">Top Shelf Productions</option>
                            <option value="VIZ Media LLC">VIZ Media LLC</option>
                            <option value="storedpub" selected>
                            publisher value stored in database</option>
                            </select>
                        </div>
                        <div className={styles.createcenter}>
                            <label htmlFor="Genre">Genre: </label>
                            <input
                            type="text"
                            id="genre"
                            name="genre"
                            value="genre data stored in database" />
                        </div>
                        <div className={styles.createcenter}>
                            <label htmlFor="pages">Number of Pages: </label>
                            <input type="text" id="pages" name="pages" value="pages value stored in database" />
                        </div>
                        <div className={styles.createcenter}>
                            <label htmlFor="rating">Rating: </label>
                            <input name="rating" id="rating" value="rating value stored in database" ></input>
                        </div>
                        <div className={styles.createcenter}>
                            <label htmlFor="synop">Synopsis: </label>
                            <textarea name="synop" id="synop" rows="2" cols="25">
                            synopsis value stored in database</textarea>
                        </div>
                        <div className={styles.createcenter}>
                            <button  type="submit" className="submitbutton">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
      </div>
    )
  }

export default Update; 