import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import BookList from './BookList'
import BookDetails from './BookDetails'

const App = () => {
  const [selectedBook, setSelectedBook] = useState({})
  return (
    <>
      <Nav />



      <Routes>
        <Route path='/' element={<h2>Welcome to the Library Home page!</h2>} />
        <Route path='/books' element={<BookList setSelectedBook={setSelectedBook} />} />
        <Route path='/books/:id' element={
          <BookDetails
          setSelectedBook={setSelectedBook}
          selectedBook={selectedBook} 
          />
        }
        />

      </Routes>
    </>
  )
}

export default App

