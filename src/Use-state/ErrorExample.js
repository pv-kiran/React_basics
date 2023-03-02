import React from 'react'

// This code describes why do we need use state. Here we are able to change the value of variable ( state / data) but we are not able to update / re-render the UI. Changes in the value s not visible in UI.

function ErrorExample() {
  let title = 'Random title';
  const handleClick = () => {
    title = 'Hello People';
    console.log(title)
  }
  return (
    <React.Fragment>
        <h2>{title}</h2>
        <button className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
  )
}

export default ErrorExample