import {useState} from 'react'
const Counter=()=>{
const[count,setCount]=useState(0);
const handleDec=()=>{
  setCount((prev)=>prev-1)
}
const handleInc=()=>{
  setCount((prev)=>prev+1)
}
const handleReset=()=>{
  setCount((prev)=>prev=0)
}
  return (
    <div>

      <button onClick={handleInc}>INc</button>
      {count}
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDec}>Dec</button>

    </div>
  )
}
export default Counter