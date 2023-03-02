import React , {useState , useEffect} from 'react'

function ConditionalRendering() {

  const url = 'https://api.github.com/users/mojombo';

  const [isLoading , setIsLoading] = useState(true);
  const [isError , setIsError] = useState(false);
  const [user , setUser] = useState('');

  useEffect(() => {
    fetch(url)
      .then(res => {
        if(res.status >= 200 && res.status <=299) {
          return res.json(); 
        } else {
            setIsError(true);
            setIsLoading(false);
        }
      })
      .then(user => {
         setIsLoading(false);
         setUser(user);
      })
      .catch(err => console.log(err))
  } , [])

  if(isLoading) {
    return (
        <h1>Loading ...!!</h1>
    )
  } 
  else if(isError) {
    return (
        <h1>Error ...!!</h1>
    )
  }
  else {
    return (
        <React.Fragment>
            <h1>{user.login}</h1>
        </React.Fragment>
    )
  }

  
}

export default ConditionalRendering