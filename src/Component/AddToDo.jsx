
import React, { useState } from 'react'

export default function ToDoList(props) {
  const [inputText,setInputText]=useState('')

  const handleEnterPress =(e)=>{
    if(e.keyCode===13){
        props.addList(inputText)
        setInputText("")
    }
  }
  return (
  <div className='container-1'>
     <div className="input container">
    <h2 className='heading'> todo list</h2>
    
<input type="text" className='input-box-todo'
placeholder='Enter your todo'
value={inputText}

onChange={e=>{
  setInputText(e.target.value)

}}
onKeyDown={handleEnterPress}

/>
<button className='add-btn'
onClick={()=>{
  props.addList(inputText)
  setInputText("")
}}>+</button>


   </div>
  </div>
  )
}

