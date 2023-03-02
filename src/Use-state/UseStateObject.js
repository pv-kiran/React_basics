import React , {useState} from 'react'

function UseStateObject() {

  const [ person , setPerson ] = useState({name: 'Kiran' , age : 25 , message: 'Random Message'});  

  const changeMessage = () => {
    setPerson({...person , message: 'Hello World'});
  }

  return (
      <React.Fragment>
         <h1>{person.name}</h1>
         <h1>{person.age}</h1>
         <h1>{person.message}</h1>
         <button className='btn' onClick={changeMessage}>Change Message</button>
      </React.Fragment>
  )
}

export default UseStateObject