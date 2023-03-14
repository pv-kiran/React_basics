import React from 'react'
import { Link } from 'react-router-dom'
// import { Routes , Route } from 'react-router-dom'

function Router() {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Router</Link>
            </li>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/books'>Books</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Router