import React , {useState} from 'react'

function ShortCiruit() {

  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIsError(!isError);
  }
  return (
    <React.Fragment>
       {
         isError && <h1>Error</h1>
       }
       <h1>{isError || 'ERROR FREE'}</h1>
       <button className='btn' onClick={handleClick}>Toggle Error</button>
    </React.Fragment>
    
  )
}

export default ShortCiruit