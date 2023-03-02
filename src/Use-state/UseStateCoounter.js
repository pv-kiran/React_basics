import React , {useState} from 'react'

function UseStateCoounter() {
 
  const [counter , setCounter] = useState(0);

  const resetCounter = () => {
    setCounter(0);
  }

  const complexCounterHandler = () => {
    setTimeout(() => {
       setCounter((prevCounter) => {
          return prevCounter + 1;
       })
    } , 2000)
  }

  return (
    <React.Fragment>
        <h1>{counter}</h1>
        <button className='btn' onClick={() => {setCounter(counter+1)}}>Increment</button>
        <button className='btn' onClick={() => {setCounter(counter-1)}}>Decrement</button>
        <button className='btn' onClick={resetCounter}>Reset</button>
        <button className='btn' onClick={complexCounterHandler}>Complex Counter</button>
    </React.Fragment>
  )


}

export default UseStateCoounter