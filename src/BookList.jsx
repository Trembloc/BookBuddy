import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'

const BookList = (props) => {
  /* a use state to store the books */
  const [allBooks, setAllBooks] = useState([]);

  /* fetch the Book names from the API */
  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
/*       console.log(response); */
      const responseObject = await response.json();
      const retrievedBooks = responseObject.books
/*       console.log(responseObject); */
      setAllBooks(retrievedBooks)
    }
    getBooks();
  }, []);

    const navigate = useNavigate();

  const showAnimalDetails = () => {
    /* console.log('showing'); */

    navigate('/books/:id');
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