const BookDetails = (props) => {
  return (

    <section>
      <ul><h3>Details</h3>
        <li>{props.selectedBook.title}</li>
        <li>{props.selectedBook.id}</li>
        <li>{props.selectedBook.author}</li>
        <li>{props.selectedBook.description}</li>
{/*         <li>{props.selectedBook.available}</li> */}
      <button onClick={() => { props.setSelectedBook({}) }}>Clear Selected Book</button>
      </ul>
    </section>
  )

}

export default BookDetails;