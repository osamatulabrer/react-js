import { useState } from "react"
import AddTask from "./component/useReducer/AddTask"
import TaskList from "./component/useReducer/taskList"
import { initialTasks } from "./component/useReducer/initialTasks"



export function App(){
 
const [tasks,setTasks] = useState(initialTasks)
const handleAddTask = (task)=>{
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text : task
      }
    ])
}
const handleEditTask = (text)=>{
 setTasks(tasks.map(t =>{
  if(t.id == text.id){
    return text
  }else{
    return t
  }
 }))
}

const handleDeleteTask = (id)=>{
  console.log(id)
  // setTasks(tasks.filter(task => task.id !== id))
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




// let a = 10;
// let b = a;
// b = 20
// console.log(a)

// let aa = {
//   a:20,
//   b:20
// }
// let bb = aa
// bb.a = 30
// console.log(aa)
