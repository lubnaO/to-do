import React from 'react'
import edit from './assets/edit.svg'
import deletion from './assets/delete.svg'
const ToddoItem = ({ title,deleteSpecificTask, editSpecificTask}) => {
  return (
    <>
       <li className='mt-3 list-group-item text-capitalize d-flex justify-content-between list-description'>
        <h6>{title}</h6>
        <div className="todo-icon">
            <span onClick={deleteSpecificTask} > <img src={deletion} width={20} alt="" /></span>
            <span onClick={editSpecificTask}><img src={edit} alt="" width={20} /></span>
        </div>
       </li>
       
    </>
  )
}

export default ToddoItem