import React , {useState , useEffect} from 'react'

function UseEffectCleanup() {
  const [size , setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log('Hello');
    window.addEventListener('resize', checkSize)
    return () => {
        console.log('Clean UP');
        window.removeEventListener('resize' , checkSize);
    }
  })

  return (
    <React.Fragment>
        <h1>{size} PX</h1>
    </React.Fragment>
  )
}

export default UseEffectCleanup