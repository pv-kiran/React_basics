import React , {useState} from 'react'
import Modal from './Modal';

function Setup() {
  const data = [
      { id: 1, name: 'john' },
      { id: 2, name: 'peter' },
      { id: 3, name: 'susan' },
      { id: 4, name: 'anna' },
  ];
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
     e.preventDefault();
     if(name) {
        setShowModal(true);
        const newPerson = {
            id: new Date().getMilliseconds().toString() ,
            name
        }
        setPeople([...data , newPerson]);
        setName('');
     }
  }

  return (
     <React.Fragment>
        {
            showModal && <Modal></Modal>
        }
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <input type="text"
                       name="name" 
                       id="name" 
                       value={name}
                       onChange = {(e) => {setName(e.target.value)} }
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        {
            people.map((person) => {
                return(
                    <div key={person.id}>
                        <h3>{person.name}</h3>
                    </div>
                )
            })
        }
     </React.Fragment>
  )

}

export default Setup