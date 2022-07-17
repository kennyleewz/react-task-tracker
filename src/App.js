import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const name = 'Kenji'
  const [tasks, setTasks] = useState([
    {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        reminder: false,
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        reminder: true,
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        reminder: false,
    },
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <>
      <div className="container">
        <Header title='Task Tracker' />
        <AddTask />
        { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <p>No task spotted</p>}
      </div>
    </>
  );
}

export default App;
