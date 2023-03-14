import React from 'react'
import BookList from './BookList'
import Router from './Router'
function NewBook() {
  return (
    <React.Fragment>
        <BookList></BookList>
        <div>New Boook</div>
    </React.Fragment>
  )
}

export default NewBook