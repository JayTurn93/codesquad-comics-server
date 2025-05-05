import booksData from "../data/books"
import { useState, useEffect } from "react";
import books from "../data/books";
import styles from "../App.module.css"

function Admin() {

    const [collectionBooks, setCollectionBooks] = useState([]);
    const url = "https://course-project-codesquad-comics-server.onrender.com/api/books"
    const urlDelete = "https://course-project-codesquad-comics-server.onrender.com/api/books/delete/${bookId}"

    useEffect(() => {
        // const theBooks = books;
        // console.log("Check Up.")
        // localStorage.setItem("theBooks", JSON.stringify(theBooks));
        // console.log(theBook)
        // setCollectionBooks(theBooks);
        fetch(url)
        .then(response => setCollectionBooks(response))
        .catch(() => console.log(("Theres a problem.")))
        
    }, [])

    const deleteBook = () => {fetch(urlDelete, {method: "delete"})
            .then(console.log("successful"))
            .catch(console.log("unsuccessful"))
        }

    console.log("collection test:", collectionBooks)

    return (
      <div>
        <main className={styles.twotone}>
            <section className={styles.container}>
            <h1 className={styles.createcenter}>ADMIN PAGE</h1>
            <button className={styles.addcomic}>Add New Comic</button>
            <table className={styles.admintable}>
                <thead>
                <tr>
                    <th className="adminhead">COMIC TITLE</th>
                    <th className="adminhead">EDIT</th>
                    <th className="adminhead">DELETE</th>
                </tr>
                </thead>
                <tbody>
                    {collectionBooks.map((book) => 
                    <tr key={book._id}>
                    <td className={styles.odds}>{book.title}</td>
                    <td className={styles.odds}><button className={styles.bluebutton} >EDIT</button></td>
                    <td className={styles.odds}><button className={styles.yellowbutton} onClick={deleteBook.bookId}>DELETE</button></td>
                    </tr>
                    )
                    }
                    {/* <tr>
                        <td className="odds">Batman: The Dark Knight Returns</td>
                        <td className="odds"><button className="bluebutton">EDIT</button></td>
                        <td className="odds"><button className="yellowbutton">DELETE</button></td>
                    </tr>
                    <tr>
                        <td className="evens">Black Panther: A Nation Under Our Feet Book 1</td>
                        <td className="evens"><button className="bluebutton">EDIT</button></td>
                        <td className="evens"><button className="yellowbutton">DELETE</button></td>
                    </tr>
                    <tr>
                        <td className="odds">Fun Home: A Family Tragicomic</td>
                        <td className="odds"><button className="bluebutton">EDIT</button></td>
                        <td className="odds"><button className="yellowbutton">DELETE</button></td>
                    </tr>
                    <tr>
                        <td className="evens">Hunter X Hunter Vol. 1</td>
                        <td className="evens"><button className="bluebutton">EDIT</button></td>
                        <td className="evens"><button className="yellowbutton">DELETE</button></td>
                    </tr>
                    <tr>
                        <td className="odds">Lumberjanes Vol. 1</td>
                        <td className="odds"><button className="bluebutton">EDIT</button></td>
                        <td className="odds"><button className="yellowbutton">DELETE</button></td>
                    </tr>
                    <tr>
                        <td className="evens">March: Book One</td>
                        <td className="evens"><button className="bluebutton">EDIT</button></td>
                        <td className="evens"><button className="yellowbutton">DELETE</button></td>
                    </tr>
                    <tr>
                        <td className="odds">One Piece, Vol. 1: Romance Dawn</td>
                        <td className="odds"><button className="bluebutton">EDIT</button></td>
                        <td className="odds"><button className="yellowbutton">DELETE</button></td>
                    </tr>
                    <tr>
                        <td className="evens">Parable of the Sower</td>
                        <td className="evens"><button className="bluebutton">EDIT</button></td>
                        <td className="evens"><button className="yellowbutton">DELETE</button></td>
                    </tr>
                    <tr>
                        <td className="odds">Queer: A Graphic History</td>
                        <td className="odds"><button className="bluebutton">EDIT</button></td>
                        <td className="odds"><button className="yellowbutton">DELETE</button></td>
                    </tr>
                    <tr>
                        <td className="evens">The Walking Dead, Vol. 1: Days Gone Bye</td>
                        <td className="evens"><button className="bluebutton">EDIT</button></td>
                        <td className="evens"><button className="yellowbutton">DELETE</button></td>
                    </tr>
                    <tr>
                        <td className="odds">Wake: The Hidden History of Women-Led Slave Revolts</td>
                        <td className="odds"><button className="bluebutton">EDIT</button></td>
                        <td className="odds"><button className="yellowbutton">DELETE</button></td>
                    </tr>
                    <tr>
                        <td className="evens">Watchmen</td>
                        <td className="evens"><button className="bluebutton">EDIT</button></td>
                        <td className="evens"><button className="yellowbutton">DELETE</button></td>
                    </tr> */}
                </tbody>
            </table>
            </section>
        </main>
      </div>
    )
  }

export default Admin; 