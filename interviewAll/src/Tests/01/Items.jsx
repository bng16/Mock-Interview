import { useState } from "react";

function Items({name, deleteFunc}) {

  const [isSelected, setSelected] = useState(false);

  return (
    <div key={name}> 
          <input type="checkbox" onChange={()=>setSelected(prev => !prev)} />
          <span>{name}</span>
          {isSelected && <button className='bg-red-200 rounded-md px-1 border-[1px] border-black' onClick={()=>{
            deleteFunc(name)
            setSelected(prev => !prev)
            }}>Delete</button>}
    </div>
  )
}

export default Items