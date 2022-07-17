import React from 'react'
import Task from './items/Task'

function Tasks({tasks, onDelete, onToggle}) {
  return (
    <>
        {tasks.map((task) => 
            <Task task={task} key={task.id} onDelete={onDelete} onToggle={onToggle}/>
        )}
        <br/>
        <h3>Total Tasks: {tasks.length}</h3>
    </>
  )
}

export default Tasks