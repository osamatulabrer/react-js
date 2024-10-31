import TaskItem from "./taskItem"



export default function TaskList({tasks,onEditTask,onDeleteTask}){
    return(
        <ul className="space-y-2">
            {tasks.map(task => 
                <TaskItem key={task.id}  task={task.text} onEditTask={onEditTask} onDeleteTask={onDeleteTask }/>
            )}
          
            
            
           
       
      </ul>
    )
}