import React from 'react'
import { Link, useParams } from 'react-router-dom'
function Contact() {
  const {id} = useParams();
  return (
    <React.Fragment>
         {/* <ul>
            <li>
              <Link to={'/contact/1'}>Contact 1</Link>
            </li>
            <li>
              <Link to={'/contact/2'}>Contact 2</Link>
            </li>
            <li>
              <Link to={'/contact/new'}>Contact New</Link>
            </li>
         </ul> */}
         <div>Contact {id}</div>
    </React.Fragment>
  )
}

export default Contact