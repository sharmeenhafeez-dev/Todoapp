
import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

export default function ToDoList(props) {
  return (
 <li className="list-item">
 {props.item}
<span className='icons'onClick={e=>{
  props.delete(props.index)
}}><AiFillDelete /></span>
 </li>
  )
}
