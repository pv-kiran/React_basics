import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Router from './Router'
function Booklayout() {
  return (
    <React.Fragment>
        <Router></Router>
        <Link to= '/books/1'>Book 1</Link>
        <Link to= '/books/2'>Book 2</Link>
        <Link to={'/books/new'}>New</Link>
        <Outlet></Outlet>
    </React.Fragment>
  )
}

export default Booklayout