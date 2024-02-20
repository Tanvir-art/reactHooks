import React, { useRef, useState } from 'react'

const UseRef = () => {
    const  [num, setNum] = useState(0);
    const forRefone = useRef();
    const forRef = useRef();
    const getNumber =()=>{
        console.log("number")
        console.log(forRefone.current)
        forRefone.current.style.width = "400px"
    }

    const getText =()=>{
        console.log(" text")
        console.log(forRef .current)
        forRef.current.style.width = "400px"
        
    }
  return (
    <div>
        <input type="number" 
        value={num}
        ref={forRefone}
        onChange={(e)=>{setNum(e.target.value)}}
        />
        <input type="text" 
          ref={forRef}
        value={num}
        onChange={(e)=>{setNum(e.target.value)}}
        />

        <h2>{num}</h2>
        
        <button onClick={getNumber}>Number</button>
        <button onClick={getText}>Text</button>

      
    </div>
  )
}

export default UseRef
