import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

//onAdd,onDelete,onEdit,taskToEdit,onUpdate
function TaskComponent({task}){
  
    return (
      
        <div className="max-w-4xl grid grid-cols-12 bg-gray-100 mx-auto p-4 my-6 gap-4">
{/* //onAdd={onAdd} */}
        <TaskForm  />
        
        <TaskList />
           
          
        </div>
       
    )
}
export default TaskComponent;


 {/* // task={task} 
            // onDelete={onDelete}
            // onEdit={onEdit}
            // taskToEdit={taskToEdit}
            // onUpdate={onUpdate}
           /> */}