import { useState } from "react";
import styles from "../App.module.css"
import { useNavigate } from "react-router-dom";

function Create() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [genre, setGenre] = useState("");
    const [pages, setPages] = useState(0);
    const [rating, setRating] = useState(0);
    const [synopsis, setSynopsis] = useState("");
    const createBook = "https://course-project-codesquad-comics-server.onrender.com/api/books/create"
    // I know i can use a object to shorten this entire set of useStates I have above. A change for the future.
    const handleTitleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value);
    }
    const handleAuthorChange = (e) => {
        e.preventDefault()
        setAuthor(e.target.value);
    }
    const handlePublisherChange = (e) => {
        e.preventDefault()
        setPublisher(e.target.value);
    }
    const handleGenre = (e) => {
        e.preventDefault()
        setGenre(e.target.value);
    }
    const handlePageChange = (e) => {
        e.preventDefault()
        setPages(e.target.value);
    }
    const handleRatingChange = (e) => {
        e.preventDefault()
        setRating(e.target.value);
    }
    const handleSynopsisChange = (e) => {
        e.preventDefault()
        setSynopsis(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, author, publisher, genre, pages, rating, synopsis);
        const body = {
            title: e.target.title.value,
            author: e.target.author.value,
            publisher: e.target.publisher,
            genre: e.target.genre.value,
            pages: e.target.pages.value,
            rating: e.target.rating.value,
            synopsis: e.target.synopsis
          }
        fetch(createBook, {method: "post"})
        .then(JSON.stringify(body))
        .then(console.log("successful"))
        .then(navigate("/admin"))
        .catch(console.error)
        
    }

    return (
      <div>
        <main className={styles.twotone}>
            <section className={styles.container}>
                <h1>CREATE NEW COMIC</h1>
                <div className={styles.cform}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.createcenter}>
                            <label htmlFor="title">Title:</label>
                                <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Title"
                                onChange={handleTitleChange}/>
                        </div>
                        <div className={styles.createcenter}>
                                <label htmlFor="author">Author:</label>
                                <input
                                type="text"
                                name="author"
                                id="author"
                                placeholder="Author"
                                onChange={handleAuthorChange}/>
                        </div>
                        <div className={styles.createcenter}>
                            <label htmlFor="publisher">Publisher:</label>
                            <select name="publishers" id="publisher-select" onChange={handlePublisherChange}>
                                <option value="selection" defaultValue={publisher}>Select</option>
                                <option value="BOOM! Box">BOOM! Box</option>
                                <option value="DC Comics">DC Comics</option>
                                <option value="Harry N. Abrams">Harry N. Abrams</option>
                                <option value="Icon Books">Icon Books</option>
                                <option value="Image Comics">Image Comics</option>
                                <option value="Marvel">Marvel</option>
                                <option value="Simon & Schuster">Simon & Schuster</option>
                                <option value="Top Shelf Productions">Top Shelf Productions</option>
                                <option value="VIZ Media LLC">VIZ Media LLC</option></select>
                        </div>
                        <div className={styles.createcenter}>
                            <label htmlFor="genre">Genre:</label>
                            <input
                                type="text"
                                name="genre"
                                id="genre"
                                placeholder="Genre"
                                onChange={handleGenre}/>
                        </div> 
                        <div className={styles.createcenter}>
                            <label htmlFor="pages">Number of Pages:</label>
                            <input
                                type="text"
                                name="pages"
                                id="pages"
                                placeholder="Number of Pages"
                                onChange={handlePageChange}/>
                        </div>  
                        <div className={styles.createcenter}>
                            <label htmlFor="rating">Rating:</label>
                            <select name="rating" id="rating" onChange={handleRatingChange}>
                                <option defaultValue={rating}>Number 0 to 5</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>  
                        <div className={styles.createcenter}>
                            <label>Synopsis:</label>
                            <textarea
                                name="synop"
                                id="synop"
                                placeholder="Synopsis"
                                defaultValue={synopsis}
                                onChange={handleSynopsisChange} >
                            </textarea>
                        </div>
                        <div className={styles.createcenter}>
                            <input type="submit" />
                        </div> 
                    </form>
                </div> 
            </section>
        </main>
      </div>
    )
  }

export default Create; 