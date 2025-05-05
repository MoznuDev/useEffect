import React, { useEffect, useState } from 'react'
import Container from './Container'

const UseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
document.title = `chat ${count}`
setTimeout(() => {
    setCount(count + 1)
}, 1000);
        
    })

  return (
   <>
   <Container>
   <div className='text-center font-bold'>{count}</div>
   </Container>
   
   </>
  )
}

export default UseEffect