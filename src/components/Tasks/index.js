import React from 'react'
import Task from './Task/index'
import './index.scss'
const Tasks = ({EditHandler,tasks,checkHandler,deleteHandler,filter}) => {
  const FilteredTasks = tasks.filter((task) => {
    switch (filter) {
      case 'All':
        return task
      case 'Completed':
        return task.isDone === true
      
    }
  })
  const num = tasks.length
  return (
    <div>
      <div className="memo" >
        <h3>{num} tasks remaining</h3>
      </div>
      {
        FilteredTasks.map((task,index) => {
          return <Task EditHandler={EditHandler} key={index} task={task} checkHandler={checkHandler} id={index} deleteHandler={deleteHandler}></Task>
        })
      }
    </div>
  )
}

export default Tasks
