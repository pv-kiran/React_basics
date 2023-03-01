import React from 'react'

function BookList(props) {

  const {title , author , imgSrc } = props.book; 

  return (
    <article className='bookContainer'>
      <img src= {imgSrc} alt="Book_One"/>
      <h1>{title.toUpperCase()}</h1>
      <h1>{author}</h1>
    </article>
  )
}


export default BookList