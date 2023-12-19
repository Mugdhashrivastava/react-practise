import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ arr, task, onDelete,updateTasks, index, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState("");

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEdit = (index,id) => {
    setIsEditing(false);
    const obj = {
      id:id,
   Text:"kwelfhew",
     day:editedText,
     reminder:'true'
   }
     arr.splice(index,1,obj)
    setTasks(arr)
    updateTasks(arr)
    console.log(arr, "changewala ")
  };

  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`} >
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={()=> handleEdit(index, task.id)}>Save</button>
        </div>
      ) : (
        <>
          <h3>
            {task.text}{" "}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />
          </h3>
          <p>{task.day}</p>
          <button onClick={handleDoubleClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
