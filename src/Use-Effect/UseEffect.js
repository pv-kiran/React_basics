import React , {useState , useEffect} from 'react'

function UseEffect() {

  const [value , setValue] = useState(0);  



  useEffect(() => {
    if(value > 0) {
     document.title = `New Message ( ${value} )`
    }
    console.log('Use - Effect');
  } , [value])

  console.log('Render')
  return (
      <React.Fragment>
        <h1>{value}</h1>
        <button className='btn' onClick={() => {setValue(value+1)}}>Click</button>
      </React.Fragment>
  )
}

export default UseEffect