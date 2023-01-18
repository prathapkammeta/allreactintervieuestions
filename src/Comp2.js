import UpdateComp from './Hoc'
function Comp2({handleInc,inc}){

  return (
    <div>
{inc}
<button onClick={handleInc}>Comp1</button>


    </div>
  )
}
export default UpdateComp(Comp2)