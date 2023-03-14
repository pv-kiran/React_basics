import React from 'react'
import { useParams } from 'react-router-dom'
import BookList from './BookList';
import Router from './Router';
function Book() {
  const {id} = useParams();
  return (
    <React.Fragment>
        <BookList></BookList>
        <div>Book {id}</div>
    </React.Fragment>
  )
}

export default Book