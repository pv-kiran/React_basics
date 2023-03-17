import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function ContactLayout() {
  return (
    <React.Fragment>
        <ul>
            <li>
              <Link to={'/contact/1'}>Contact 1</Link>
            </li>
            <li>
              <Link to={'/contact/2'}>Contact 2</Link>
            </li>
            <li>
              <Link to={'/contact/new'}>Contact New</Link>
            </li>
            <Outlet></Outlet>
        </ul> 
    </React.Fragment>
  )
}

export default ContactLayout