// import books from "../data/books";
import { useEffect, useState } from "react";
// import books from "../data/books";
import styles from "../App.module.css";

function Home() {
    const [collectionBooks, setCollectionBooks] = useState([]);
    const url = "https://course-project-codesquad-comics-server.onrender.com/api/books"

    useEffect (() => {
        // setCollectionBooks(books)
        
        fetch(url, {method: "GET"})
        .then(response => response.json())
        .then((data) => {
            const books = data.data.books
            console.log(books)
            setCollectionBooks(books);
        })
        .catch(console.error)
    }, [])

    console.log("collection test:", (collectionBooks))
    

    return (
      <div>
        <main className={styles.container}>
            <h1>COMPLETE COMIC COLLECTION</h1>
            <section className={styles.indexcontainer}>
            
            <section className="comics-list">
                {collectionBooks.map((book) =>  
                        <div className="comic-info" key={book._id}>
                            <a href="#"
                            ><img src={book.imageUrl} alt={book.title}style={{width: "200px"}} /></a><br />
                            <i>{book.title}</i><br />
                            {book.author} <br />
                            {book.rating} <br />
                            <a href="#">Details</a>
                        </div>
                )}
                {/* <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/fun-home.jpg"
                        alt="Fun Home"
                        style={{width: "200px"}} /></a><br />
                    <i>Fun Home: A Family Tragicomic</i><br />
                    by Alison Bechdel <br />
                    5 stars <br />
                    <a href="#">Details</a>
                </div>
                <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/watchmen.jpg"
                        alt="Watchmen"
                        style={{width: "200px"}} /></a><br />
                    <i>Watchmen</i><br />
                    by Alan Moore <br />
                    5 stars <br />
                    <a href="./watchmen.html">Details</a>
                </div>
                <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/hunter-x-hunter.jpg"
                        alt="HunterXHunter"
                        style={{width: "200px"}} /></a><br />
                    <i>Hunter X Hunter</i><br />
                    by Yoshihiro Togashi <br />
                    5 stars <br />
                    <a href="$">Details</a>
                </div>
                <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/lumberjanes.jpg"
                        alt="Lumberjanes"
                        style={{width: "200px"}} /></a><br />
                    <i>Lumberjanes Vol. 1</i><br />
                    by Noelle Stevenson <br />
                    4 stars <br />
                    <a href="#">Details</a>
                </div>
                <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/one-piece.jpg"
                        alt="One Piece"
                        style={{width: "200px"}} /></a><br />
                    <i>One Piece, Vol. 1 Romance Dawn</i><br />
                    by Eiichio Oda <br />
                    5 stars <br />
                    <a href="#">Details</a>
                </div>
                <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/wake.jpg"
                        alt="Wake"
                        style={{width: "200px"}} /></a><br />
                    <i>Wake: The Hidden History of Women-led Slave Revolts</i><br />
                    by Rebecca Hall <br />
                    4 stars <br />
                    <a href="#">Details</a>
                </div>
                <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/black-panther.jpg"
                        alt="Black Panther"
                        style={{width: "200px"}} /></a><br />
                    <i>Black Panther: A Nation Under Our Feet Book 1</i><br />
                    by Ta-Nehisi Coates<br />
                    3 stars <br />
                    <a href="#">Details</a>
                </div>
                <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/the-walking-dead.jpg"
                        alt="Walking Dead"
                        style={{width: "200px"}} /></a><br />
                    <i>The Walking Dead, Vol. 1 Days Gone Bye</i><br />
                    by Robert Kirkman <br />
                    4 stars <br />
                    <a href="#">Details</a>
                </div>
                <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/march.jpg"
                        alt="March: Book One"
                        style={{width: "200px"}} /></a><br />
                    <i>March: Book One</i><br />
                    by John Lewis <br />
                    5 stars <br />
                    <a href="">Details</a>
                </div>
                <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/batman.jpg"
                        alt="Batman"
                        style={{width: "200px"}} /></a><br />
                    <i>Batman: The Dark Knight Returns</i><br />
                    by Frank Miller <br />
                    3 stars <br />
                    <a href="#">Details</a>
                </div>
                <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/queer.jpg"
                        alt="Queer"
                        style={{width: "200px"}} /></a><br />
                    <i>Queer: A Graphic History</i><br />
                    by Meg-John Barker<br />
                    4 stars <br />
                    <a href="#">Details</a>
                </div>
                <div className="comic-info">
                    <a href="#"
                    ><img
                        src="./images/parable-of-the-sower.jpg"
                        alt="Parable"
                        style={{width: "200px"}} /></a><br />
                    <i>Parable of the Sower</i><br />
                    by Octavia E. Butler<br />
                    4 stars <br />
                    <a href="#">Details</a>
                </div> */}
                </section>
                <button className={styles.indexbutton}>DISPLAY MORE</button>
            </section>
        </main>
      </div>
    )
  }

export default Home; 