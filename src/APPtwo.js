import React from 'react'

function BookList({title , author , imgSrc , children}) {
  
  console.log(title , author , imgSrc , children);
  return (
    <article className='bookContainer'>
      {children}
      {/* <img src= {imgSrc} alt="Book_One"/>
      <h1>{title.toUpperCase()}</h1>
      <h1>{author}</h1>
      {children} */}
    </article>
  )
}


export default BookList