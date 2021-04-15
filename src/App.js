import React, { useState } from 'react'
import { Fragment } from 'react';
import TaskInput from './components/TaskInput'
import TaskFilter from './components/TaskFilter'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState( [
  {
    title: "Eat",
    isDone: true
  },
  {
    title: "Sleep",
    isDone: false
  },
  {
    title: "Repeat",
    isDone: false
  }
  ]);

  const [filter, setFilter] = useState('All');
  const [inputValue, setInputValue] = useState('');

  const EditHandler = (id,editValue) => {
    const newTasks = tasks.map((item, index) => {
      if (index === id) {
        item.title=editValue
      }
      return item

    })
    setTasks(newTasks)

    

  }
  const addHandler = () => {
    if (inputValue) {
      const newTask = {
        title: inputValue,
        isDone:false
      }
      const newTasks=[...tasks,newTask]
      setTasks(newTasks)
      setInputValue('')
    } else {
      window.alert('no value')
    }
  }
  const checkHandler = (id) => {
    let a = tasks.map((item, index) => {
      if (index === id) {
        item.isDone=!item.isDone
      }
      return item

    })
    setTasks(a)
    console.log(a);
  }
  const deleteHandler = (id) => {
    let a = tasks.filter((item, index) => {
      return index !== id
    })
    setTasks(a)
  }
  return (
    <Fragment>
      <h1 style={{textAlign:"center"}}>What needs to be done?</h1>
      <TaskInput inputValue={inputValue} setInputValue={setInputValue} addHandler={addHandler}></TaskInput>
      <TaskFilter setFilter={setFilter}></TaskFilter>
      <Tasks EditHandler={EditHandler} filter={filter} tasks={tasks} checkHandler={checkHandler} deleteHandler={deleteHandler} ></Tasks>
    </Fragment>
  );
}

export default App;
