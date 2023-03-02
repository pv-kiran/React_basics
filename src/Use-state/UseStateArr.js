import React , {useState} from 'react'

function UseStateArr() {

    const data = [
      { id: 1, name: 'john' },
      { id: 2, name: 'peter' },
      { id: 3, name: 'susan' },
      { id: 4, name: 'anna' },
    ];

    
    const [people , setPeople] = useState(data);

    const removeItem = (id) => {
       const newPeople = people.filter((people) => {
           if(people.id !== id) {
             return people ;
           }
       })

       setPeople(newPeople);
    }

    return (
        <React.Fragment>
             {
                people.map((person) => {
                    const { id , name } = person ;
                    return(
                        <div key={id} className='item'>
                            <h4>{name}</h4>
                            <button onClick={() => removeItem(id)} className='btn'>Remove</button>
                        </div>
                    )
                })
             }
             <button className='btn' onClick={() => {
               setPeople([]);
             }}>
              Clear Items
             </button>
             <button className='btn' onClick={() => {
                setPeople(data);
             }}>
               Show Items
             </button>
        </React.Fragment>
    )

}

export default UseStateArr