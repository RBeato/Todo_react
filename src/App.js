import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {

  const [tasks , setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    ])

// Add Task
const addTask  = (task) =>{ 
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])

  console.log(id)
}

// Delete Task
const deleteTask = (id) =>  {
  setTasks(tasks.filter((task)=> task.id !== id))
  // console.log('delete', id)
}

// Toggle Reminder
const toggleReminder = (id) => {
  // console.log(id)
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder: !task.reminder} 
  : task
  )
  )
}

  return (
  <div className="App">
   <div className='container'>
     <Header />
     <AddTask onAdd={addTask}/>
     {tasks.length > 0 ? 
     (<Tasks tasks={tasks} 
     onDelete={deleteTask} onToggle= {toggleReminder}/>) :
     (
       'No tasks to show'
     )
      }
   </div>
  
  </div>
  );
}

export default App;
