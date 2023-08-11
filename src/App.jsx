
import React, { useState } from 'react'
import ToDoList from './Component/ToDoList'
import AddToDo from './Component/AddToDo'
import './App.css'
export default function App() {


  const [listTodo, setListtodo]=useState([])
let addList= (inputText)=>{

  if(inputText!=='')
  setListtodo([...listTodo,inputText])
}
 const deleteItem=(key)=>{
 let  newlistTodo =[...listTodo] 
 newlistTodo.splice(key,1)
 setListtodo([...newlistTodo])
}
  return (
<div className='container-1'>
<div className="main container">
  <div className="center container">
<AddToDo addList={addList}/>
<h1 className='app-heading'></h1>
<hr className='hr-line' />
{listTodo.map((itemList,key)=>{
  return (
    <ToDoList  key= {key} index={key} item={itemList}delete={deleteItem} />
    
  )
})}
  </div>
 </div>
</div>
  )
}
