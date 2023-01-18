import "./styles.css";
import {useState} from 'react'
import Input from './Input'
import Comp1 from './Comp1'
import  Form from './Form'
import Counter from './Counter'
import Comp2 from './Comp2'
import Parent from './Parent'
import FormValidation from "./FormValidation";
export default function App() {
const[num1,setNum1]=useState(0);
const[num2,setNum2]=useState(0);

const handleNum1=(e)=>{

  setNum1(e.target.value)


}
const handleNum2=(e)=>{

  setNum2(e.target.value)


}
  return (
    <div className="App">


 <input type='number' value={num1} onChange={handleNum1} name='name' />
 <input type='number' value={num2} onChange={handleNum2} name='name' />

<Input  num1={num1} num2={num2}/>
<Comp1 />
<Comp2 />
<Parent />
<Counter />
<Form />
<FormValidation />
    </div>
  );
}
