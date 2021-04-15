import React from 'react'
import './index.scss'
const TaskFilter = ({setFilter}) => {
  const FilterHandler = (e) => {
    setFilter(e.target.innerHTML)
    console.log(e.target.innerHTML);
  }
  return (
    <div className="task-filter">
      <button className="all" onClick={(e)=>FilterHandler(e)}>All</button>
      <button className="active" onClick={(e)=>FilterHandler(e)}>Active</button>
      <button className="completed" onClick={(e)=>FilterHandler(e)}>Completed</button>
    </div>
  )
}

export default TaskFilter
