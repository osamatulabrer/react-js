import { useState } from "react"


export default function TaskItem({ task ,tasks,onEditTask,onDeleteTask}) {
    const [isEditing, setIsEditing] = useState(false)
    let onEditContent;


    const [text ,setText] = useState(task)
    const handleEditTask = ()=>{
        onEditTask({
            ...task,
            text:text,

        })
        setIsEditing(false)
    }


    if (isEditing) {
        onEditContent = (
            <>
                <input onChange={(e)=> setText(e.target.value)} type="text " className="border p-1" value={text}/>
                <button onClick={handleEditTask} className="border rounded-md px-3 py-2 bg-green-600">Save</button>


            </>
        )
    } else {
        onEditContent = (
            <>
                <p>{text}</p>

                <button onClick={() => setIsEditing(true)} className="border rounded-md px-3 py-2 bg-green-600">Edit</button>
            </>)
    }

    return (
        <li className="flex space-x-3">
            <span>#</span>
            {onEditContent}

            <button onClick={() => onDeleteTask(tasks.id)} className="border rounded-md px-3 py-2 bg-rose-600">delete</button>
        </li>
    )
}