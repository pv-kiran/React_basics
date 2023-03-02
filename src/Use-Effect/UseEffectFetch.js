import React , {useState , useEffect} from 'react'

function UseEffectFetch() {

  const [users , setUsers] = useState([]);

  const getUsers = async () => {
    const userList = await fetch('https://api.github.com/users')
    const users = await userList.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  } , [])

  return (
    <React.Fragment>
        {
            users.map((user) => {
                const {id , avatar_url, login} = user
                return(
                    <div key={id} className='user-container'>
                         <img src={avatar_url} alt="avatar"/>
                         <h1>{login}</h1>
                    </div>
                )
            })
        }
    </React.Fragment>
  )
}

export default UseEffectFetch