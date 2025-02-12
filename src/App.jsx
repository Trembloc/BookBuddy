import { useState } from 'react'
import './App.css'
import BookList from './BookList'
function App() {

  return (
    <>
    {/* a component that displays all the books in the API (names only, kinda like a home page)*/}
    <BookList/>
    </>
  )
}

export default App
