import {useState} from 'react'
function UpdateComp(OrigComp){

  function newComp(){
const[inc,setInc]=useState(0)

const handleInc=()=>{
  setInc(inc+2)
}

     
return <OrigComp handleInc={handleInc}  inc={inc} />

    
  }
  return newComp


}

export default UpdateComp