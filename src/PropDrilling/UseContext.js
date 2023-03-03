import React, { useState, useContext } from 'react'

const PersonContext = React.createContext();

function UseContext() {
    const data = [
        { id: 1, name: 'john' },
        { id: 2, name: 'peter' },
        { id: 3, name: 'susan' },
        { id: 4, name: 'anna' },
    ];

    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        setPeople((people) => {
            return people.filter((person) => {
                if (person.id !== id) {
                    return person;
                }
            })
        })
    }

    return (
        <PersonContext.Provider value = {{removeItem , people}} >
            <h3>CONTEXT API / USECONTEXT</h3>
            <List></List>
        </PersonContext.Provider>
    )

}

function List() {
    const {people} = useContext(PersonContext)
    return (
        <React.Fragment>
            {
                people.map((person) => {
                    return (
                        <Person {...person} key={person.id} ></Person>
                    )
                })
            }
        </React.Fragment>
    )
}


function Person({ id, name}) {
    const {removeItem} = useContext(PersonContext);
    console.log(removeItem);
    return (
        <React.Fragment>
            <div className='item'>
                <h1>{name}</h1>
                <button onClick={() => { removeItem(id) }}>Remove</button>
            </div>
        </React.Fragment>
    )
}

export default UseContext