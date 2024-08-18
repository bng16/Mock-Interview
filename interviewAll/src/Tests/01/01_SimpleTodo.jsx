import React, { useState } from 'react'
import  Items  from './Items';

let list=['hi','pi','li'];

function SimpleTodo() {

  const [ourList,setOurList]=useState(list);
  
  const handleDelete=(item)=>{
    setOurList(ourList.filter((it)=>it!==item));
  }

  console.log(ourList)

  return (
    <div >
      {ourList.map(item => <Items name={item} deleteFunc={handleDelete}/>)}
    </div>
  )
}

export default SimpleTodo