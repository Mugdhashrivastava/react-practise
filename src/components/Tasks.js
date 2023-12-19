import { useEffect } from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDelete, setTasks}) => {
  console.log(tasks,"tasks---")
  
  
  const updateTasks = (task) =>{
    console.log(task)
    setTasks(task)
  return task;
  }
   
  console.log("newtasks")

  return (
    <>
      {tasks.map((task, index) => (
        <Task key={task.id} index={index} task={task} updateTasks={updateTasks} arr={tasks} setTasks={setTasks} onDelete={onDelete}/>
      ))}
    </>
  );
};

export default Tasks;
