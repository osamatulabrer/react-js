import { useReducer } from "react"
import AddTask from "./component/useReducer/AddTask"
import TaskList from "./component/useReducer/taskList"
import { initialTasks } from "./component/useReducer/initialTasks"
import TaskReducer from "./component/useReducer/Taskreducer"



export function App(){
 
const [tasks,dispatch] = useReducer(TaskReducer,initialTasks)
const handleAddTask = (task)=>{
  dispatch({
    type: 'added',
    
    task: task,
  });
}
const handleEditTask = (text)=>{
  dispatch({
    type: 'edited',
    text: text,
  });
}

const handleDeleteTask = (id)=>{
  dispatch({
    type: 'deleted',
    id: id,
  });

}
  return (


  <>
  <div className="max-w-screen-md mx-auto space-y-3">
    

    <h1 className="text-2xl font-semibold ">Prague itinerary</h1>

   <AddTask onAddTask = {handleAddTask}/>
   <TaskList tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask }/>
 

  </div>
  </>
  )
}





