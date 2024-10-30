import { useState } from "react"



export default function AddTask({onAddTask }){
  const [text,setText] = useState('')
  const handleAddTask = ()=>{
    onAddTask(text)
    setText(' ')
  }
 
    return(
      <div className="flex space-x-1">
        <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="add task" className="border rounded-sm p-1" />
        <button onClick={handleAddTask} className="border px-3 py-2 rounded-md bg-orange-500">Add</button>
      </div>
    )
}