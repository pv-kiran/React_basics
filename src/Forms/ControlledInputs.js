import React , {useState} from 'react'

function ControlledInputs() {

  const [firstName, setfirstName] = useState('');
  const [email, setEmail] = useState('');

  const [people, setPeople] = useState([]);
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const id = new Date().getMilliseconds().toString();
      if(firstName && email) {
         const person = {id ,firstName , email};
         setPeople((people) => {
            return [...people , person];
         })
         setfirstName('');
         setEmail('');

      } else {
        console.log('Empty form');
      }
  }
    
  return (
     <React.Fragment>
         <article>
             <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="firstName">Name :</label>
                    <input type="text" 
                    name="firstName" 
                    id="firstName" 
                    value={firstName}
                    onChange = {(e) => {setfirstName(e.target.value)}}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Name :</label>
                    <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    value={email}
                    onChange = {(e) => {setEmail(e.target.value)}}
                    />
                </div>
                <button type="submit">Add Person</button>
             </form>
             {
                people.map((person) => {
                    const {id ,firstName , email} = person ;
                    return(
                        <div className='item' key={id}>
                           <h4>{firstName}</h4>
                           <p>{email}</p>
                        </div>
                    )
                })
             }
         </article>
         
     </React.Fragment>
  )
}

export default ControlledInputs