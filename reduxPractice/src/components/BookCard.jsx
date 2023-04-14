import React from 'react'

function BookCard({ bookdata }) {
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="books images"
          width="100%"
        />
      </div>
      <div>{bookdata.book_name}</div>
      <div>{bookdata.category}</div>
      <div>{bookdata.release_year}</div>
    </div>
  );
}

export default BookCard