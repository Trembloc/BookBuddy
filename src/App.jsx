import { useState } from 'react'
import './App.css'
import BookList from './BookList'
import BookDetails from './BookDetails'
const App = () => {
  const [selectedBook, setSelectedBook] = useState({})
  return (
    <>
      {/* a component that displays all the books in the API (names only, kinda like a home page)*/}
      <BookList setSelectedBook={setSelectedBook} />
      <BookDetails
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />


    </>
  )
}

export default App
