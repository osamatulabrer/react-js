export default function TaskReducer(tasks,action){
        switch (action.type){
            case 'added':{
                return [
                    ...tasks,
                    {
                      id: tasks.length + 1,
                      text : action.text
                    }
                  ]
            }
            case "edited":{
                return tasks.map(t =>{
                    if(t.id == action.text.id){
                      return action.text
                    }else{
                      return t
                    }
                    })

                
            }
            case "deleted":{
                return tasks.filter(task => task.id !== action.id)
            }
            default:
                throw new Error('wrong')
        }
}