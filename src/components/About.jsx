import styles from "../App.module.css"

function About() {
    return (
      <div>
        <main className={styles.twotone}>
            <section className={styles.container}>
                <h1 className={styles.myheader}>
                    <p>ABOUT CODESQAUD COMICS</p>
                </h1>
                <p>
                    CodeSquad Comics is a collection of graphic novels read by Jalysa.
                    Copyrighted images are used for review purposes only. Meta information
                    about this collection can be found below. A detailed list of all the
                    graphic novels in this collection can be found on the homepage.
                    Additional details about each comic book, including the author, genre,
                    number of pages, and a brief synopsis, can be found by navigating to the
                    homepage and clicking the image of the book cover or the Details link
                    for the desired graphic novel.
                </p>
                <h2 className={styles.myheader}>COLLECTION DETAILS</h2>
                <ul>
                    <li>total comic books: 12</li>
                    <li>latest additions: 12</li>
                    <li>5-star ratings: 5</li>
                    <li>publishers: 9</li>
                </ul>
            </section>
        </main>
      </div>
    )
  }

export default About;  