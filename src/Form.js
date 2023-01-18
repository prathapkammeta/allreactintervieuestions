import {useState} from 'react'
const Form=()=>{

  const[details,setDetails]=useState({
    name:"",
    age:""
  })
  const [isSubmit,setIsSubmit]=useState(false)
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setDetails({...details,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsSubmit(true)
  }
 
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div>
    <label>Name</label>
    <input type='text'  name='name' value={details.name} onChange={handleChange} />
    
    </div>

    <div>
    <label>Age</label>
    <input type='number'  name='age' value={details.age} onChange={handleChange} />
    
    </div>
    <button>Submit</button>
    </form> 
{isSubmit ? <>
{details.age}
{details.name}
</> :''}

    </div>
  )
}
export default Form 