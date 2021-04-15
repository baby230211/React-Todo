import React from 'react'
import './index.scss'
const TaskInput = ({inputValue ,setInputValue,addHandler}) => {
  return (
    <div className="task-input">
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e)=>e.key==="Enter" ? addHandler() :"" }/>
      <button className="task-add" onClick={()=>addHandler()}>Add</button>
    </div>
  )
}

export default TaskInput
