import React from 'react'

function BookList({title , author , imgSrc }) {

//   const {title , author , imgSrc } = props.book; 


  const handleClick = (e) => {
    console.log(e.target.textContent);
    alert('Hello World');
  }

  const handleComplex = (author) => {
    alert(author);
  }
  
  return (
    <article className='bookContainer'>
      <img src= {imgSrc} alt="Book_One"/>
      <h1 onClick={(e) => handleClick(e)}>{title.toUpperCase()}</h1>
      <h1>{author}</h1>
      <button onClick={handleClick}>Save</button>
      <button onClick={() => handleComplex(author)}>Complex</button>
    </article>
  )
}


export default BookList