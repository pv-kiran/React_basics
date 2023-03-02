import React , {useRef} from 'react'

function UseRef() {

  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  }


  return (
     <React.Fragment>
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <input type="text" ref= {refContainer}/>
            </div>
            <button type='submit' className='btn'>Submit</button>
        </form>
     </React.Fragment>
  )
}

export default UseRef