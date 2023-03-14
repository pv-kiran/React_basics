import React , {useState} from 'react'

function MultipleInputs() {
//   const [firstName, setfirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');

  const [person, setPerson] = useState({firstName: '' , email: '' , age: ''});

  const [people, setPeople] = useState([]);
  
  const handleInputChange = (e) => {
    
    const name = e.target.name ;
    const value = e.target.value;
    setPerson({...person , [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.age) {
        const newPerson = {id: new Date().getMilliseconds().toString() , ...person};
        setPeople([...people , newPerson ]);
        setPerson({firstName: '' , email: '' , age: ''} )
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
                    value={person.firstName}
                    onChange = {handleInputChange}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Email :</label>
                    <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    value={person.email}
                    onChange = {handleInputChange}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="age">Age :</label>
                    <input 
                    type="text" 
                    name="age" 
                    id="age" 
                    value={person.age}
                    onChange = {handleInputChange}
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

export default MultipleInputs