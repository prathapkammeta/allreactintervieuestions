import {useEffect, useState} from 'react'
const FormValidation=()=>{
  const inititalValues={username:"",email:"",password:""}
  const[formValues,setFormValues]=useState(inititalValues)
  const[formErrors,setFormErros]=useState({})
  const[isSubmit,setIsSubmit]=useState(false)
const handleChange=(e)=>{

  const{name,value}=e.target;
  setFormValues({...formValues,[name]:value})

}
const handleSubmit=(e)=>{
  e.preventDefault()
  setIsSubmit(true)
  setFormErros(validate(formValues))
}
useEffect(()=>{
  if(Object.keys(formErrors).length==0  && isSubmit){
  console.log(formValues)
  }
},[formErrors])
const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.username) {
    errors.username = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;
};

  return (
    <div>
     {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
     <form onSubmit={handleSubmit}>

       <div>
         <label>Name</label>
         <input type='text' onChange={handleChange} value={formValues.username} name='username' />
       </div>
{formErrors.username}       
<p></p>
       <div>
         <label>Email</label>
         <input type='text' onChange={handleChange} value={formValues.email} name='email' />
       </div>
       
       <div>
         <label>Password</label>
         <input type='text' onChange={handleChange} value={formValues.password} name='password' />
       </div>
    <button>send</button>
     </form>
    {isSubmit ? <>
    <p>Name:{formValues.name}</p>
    <p>Email:{formValues.email}</p>

    <p>Password:{formValues.password}</p>

    </> :''}
    </div>
  )
}
export default FormValidation