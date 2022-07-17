import React from 'react'

function AddTask() {
  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' />
        </div>
        <div className='form-control'>
            <label>Description</label>
            <input type='text' placeholder='Add Description' />
        </div>
        <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type='checkbox' />
        </div>
        <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask