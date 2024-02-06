import React from 'react'

const BookCard = ({book}) => {
  return (
    <div className='book-card'>
        <h1>{book.title}</h1>
        <p>{book.method}</p>
        <div className="rating">Rating: {book.rating}/10</div>
      
    </div>
  )
}

export default BookCard
