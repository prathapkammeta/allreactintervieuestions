const Child=(props)=>{

  return ( 

    <div>
      {props.hi}
      Child 

      <button onClick={()=>props.setX('this is child ')}>Click me</button>
    </div>
  )
}
export default Child 