import {useState} from 'react'
import Child from './Child'
const Parent=()=>{
const[a,setA]=useState("this is parent")
  return ( 

    <div>  Parent {a}
      <Child x={a}  setX={setA} hi="hi from parent" />
    </div>
  )
}
export default Parent 