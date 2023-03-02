import React , {useState , useReducer} from 'react'
import Modal from './Modal';


const reducer = (state , action) => {
  console.log(state , action);
  if(action.type === 'ADD_ITEM') {
     return {
        ...state ,
        people: [...state.people , action.payload] ,
        isModalOpen: true ,
        modalContent: 'Item added'
     }
  }
  else if(action.type === 'NO_ITEM') {
    return {
        ...state ,
        isModalOpen: true ,
        modalContent: 'Please enter a value'
     }
  }
  else if(action.type === 'CLOSE_MODAL') {
     return {
        ...state ,
        isModalOpen: false ,
        modalContent: 'Please enter a value'
     }
  }
  else if(action.type === 'REMOVE_ITEM'){
     console.log(state , action);
     const id = action.payload ;
     const newPeople = state.people.filter((person) => {
        if(person.id !== id) {
            return person ;
        }
     })
     return {
       ...state ,
       people:[...newPeople] ,
       isModalOpen: true ,
       modalContent: 'Item removed'
     }
  }

  throw new Error('No action type founded');
}


function UseReducer() {



  const defaultState = {
    people: [] ,
    isModalOpen: false ,
    modalContent: ''
  } ;

  const [name, setName] = useState('')
  
  const [state , dispatch] = useReducer(reducer,defaultState);

  const closeModal = () => {
    dispatch({type:'CLOSE_MODAL'})
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     if(name) {
        const newPerson = {
            id: new Date().getMilliseconds().toString() ,
            name
        }
        setName('')
        dispatch({type:'ADD_ITEM' , payload: newPerson});
     } else {
        dispatch({type: 'NO_ITEM'})
     }
  }

  return (
     <React.Fragment>
        {
            state.isModalOpen && <Modal closeModal = {closeModal} modalContent={state.modalContent}></Modal>
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
            state.people.map((person) => {
                return(
                    <div key={person.id} className='item'>
                        <h3>{person.name}</h3>
                        <button className='btn' onClick={() => {
                          dispatch({type:'REMOVE_ITEM' , payload: person.id})
                        }}>REMOVE</button>
                    </div>
                )
            })
        }
     </React.Fragment>
  )

}

export default UseReducer