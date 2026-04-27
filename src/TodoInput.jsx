import React, { useState } from 'react'
import logo from './assets/Task-amico (1).svg'
const TodoInput = ({item,changingInput,submit, objectButton }) => {

  return (
    <>
    <div className="card mt-3">
   
       <div className="header-card">
        <h3>المهام اليوم</h3>
        <img src={logo} alt="" width={80}/>
       </div>
        <form onSubmit={submit}>
         <div className="input-card">
        <input type="text" value={item} onChange={changingInput} placeholder='أضف التاسك' />
       <button type='submit'><span>{objectButton? 'Save':'+'}</span></button> 
       </div>

       </form>
  
      </div>
    </>
  )
}

export default TodoInput