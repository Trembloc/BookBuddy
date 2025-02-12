import { useState, useEffect } from "react";

const BookList = (props) => {
  /* a use state to store the books */
  const [allBooks, setAllBooks] = useState([]);

  /* fetch the Book names from the API */
  useEffect(() => {
    const getBooks = async () => {
      const booksObject = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
      const retrievedBooks = await booksObject.json();
/*       console.log(retrievedBooks.books); */
      setAllBooks(retrievedBooks.books)
    }
    getBooks();
  }, []);

  const showAnimalDetails = () => {
    console.log('showing');
  }


  /* return a body that displays them */
  return (
    <>
      {
        allBooks.map((book) => {

          return (
            <section key={book.id} onClick={() => { props.setSelectedBook(book) }}>
            <h2>{book.title}</h2>
            <button onClick={ showAnimalDetails }>Show Details</button>
            </section>
            
          )
      })
      }
    </>
  )
}

export default BookList;