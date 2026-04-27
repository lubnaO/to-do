import React from 'react'
import ToddoItem from './ToddoItem'
const TodoList = ({allItems, clear, deleteTask}) => {
  return (
    <>
    <ul className='list-group my-5'>
{allItems.length>0 && <h3 className='mt-3 text-capitalize text-center list-details'> إنجاز مهام اليوم</h3>
}
        {allItems.map((tasks, index)=>{
            return  <ToddoItem 
            key={tasks.id} 
            title={tasks.title} 
            deleteSpecificTask={()=> deleteTask(tasks.id)}
             editSpecificTask={()=> deleteTask(tasks.id)}
            />
        })}
        
        {allItems.length>0 &&  <button type='button' className='clear-button mt-5' onClick={clear}>حذف المهام</button>
}
    </ul>

    </>
 
  )
}

export default TodoList