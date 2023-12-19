import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const[tasks,setTasks] = useState([
    {
      id:1,
      Text:'kjdhfjsdh',
      day:'Monday',
      reminder:'true'

    },
    {
      id:2,
      Text:'kjdhfjsdh',
      day:'day',
      reminder:'false'

    },
    {
      id:3,
      Text:'kjdhfjsdh',
      day:'someday',
      reminder:'true'

    }
  ])

  console.log(tasks,"app comp")
//delete
  const deleteTask = (id) =>{
    console.log('gfgfg')
    setTasks(tasks.filter((task)=>task.id !== id))
  }
  const editTask = () =>{
    console.log('edit button')
  }


  //toggle reminder
  // const toggleReminder = (id) =>{
  //   setTasks(tasks.map((task) => task.id === id?{...task,reminder: !task.reminder}:task))

  // }


//add
  const addTask = (task) =>{
   const id = Math.floor(Math.random()*10000
   )+1
   const newTask = {id,...task}
   setTasks([...tasks,newTask])
  }
  return (
    <div className="container">
     <Header onAdd={()=>setShowAddTask(!showAddTask)}/>
     <AddTask onAdd={addTask}/>
    {tasks.length>0 ? ( <Tasks tasks={tasks} setTasks={setTasks} onDelete={deleteTask} />):('zero tasks') 
    }
    </div>
  
  );
}

export default App;
