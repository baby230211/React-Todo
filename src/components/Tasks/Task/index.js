import React,{useState} from 'react'
import './index.scss'
const Task = ({ EditHandler, task, checkHandler, deleteHandler, id }) => {

  const { title, isDone } = task
  const [editValue, setEditValue] = useState(title);
  const [editing, setEditing] = useState(false);
  const KeyPressHandler = (key) => {
    if (key.key === "Enter") {
      EditHandler(id,editValue)
      setEditing(false)
      
    }
  }

  return (
    <div className="task">
      <div className="title"><input type="checkbox" checked={isDone} onChange={() => checkHandler(id)} />
        {editing 
          ? (
            <input type="text" value={editValue} onKeyPress={(key) =>KeyPressHandler(key)} onChange={(e)=>setEditValue(e.target.value)}/>
        ):
        (<span>{title}</span>)}</div>
      <div className="button-section">
        <button className="edit" onClick={()=>setEditing(true)}>Edit</button>
        <button className="delete" onClick={()=>{deleteHandler(id)}}>Delete</button>
      </div>
    </div>
  )
}

export default Task
