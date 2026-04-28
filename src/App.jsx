import { useState, useEffect } from 'react'
import CardBox from './CardBox'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './App.css'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import {v4 as uuidv4} from 'uuid'
function App() {
  
    let date = new Date();
    let todayDate = date.getDate();
    let year = date.getFullYear();
    let month = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    let weekday = ["الأحد", "الأثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    let days = weekday[date.getDay()];
    let months = month[date.getMonth()];



      let getLocalStorage = () => {
      let list = localStorage.getItem('list')
      if (list) {
        return JSON.parse(list)
      } else {
        return []
      }
      }     
  
    //START
    let test = uuidv4(); //generate id
    let [item, setItems] = useState({
        items:getLocalStorage(), //it was like this items:[], but to stored in storage we change it to get data
        id:test,
        item:'',
        editItem:false
    })
    //get value from input
    let changingInput = (e) =>{
      setItems({...item,item:e.target.value})
    }
    //submit button function
    let handleSubmit = (e) =>{
      e.preventDefault();

       let newItems = { //create object with two keys id+ title
        id:item.id,
        title:item.item
       }
       console.log(newItems)

      let updateItem = [...item.items,newItems]
    
      setItems({
        items:updateItem,
        item:'',
        id:test,  //generate new id
        editItem:false
      })

    }
    //clear function
    let clearList = () =>{
    setItems({
      items:[]
    })
    }
    //delete function
    let handleDelete = (id) =>{
     let filterItems = item.items.filter((tasksDelete,index)=>{
      return tasksDelete.id !== id;
     })
      setItems({
        items:filterItems
      })
    }
    //edit item
    let handleEdit = (id) =>{
      let filterItems = item.items.filter((tasksDelete,index)=>{
      return tasksDelete.id !== id; //keep all element remaining
     })
     let selectedItem = item.items.find((itemEdit)=>{
      return itemEdit.id === id;
     })

      setItems({
        items:filterItems,
        item:selectedItem.title,
        editItem:true,
        id:id
      })
    }

  useEffect(()=>{
      localStorage.setItem('list', JSON.stringify(item.items))
    },[item.items])

    
return (
<section className='container-card'> 
    <div className='card-content'>
     <h2 className='text-center date'>{days} - {todayDate} {months} {year}</h2>
        <TodoInput item={item.item} changingInput={changingInput} submit={handleSubmit} objectButton={item.editItem} />
        <TodoList allItems={item.items} clear={clearList} deleteTask={handleDelete} editTask={handleEdit}/>

      {/* <CardBox/> */}
    </div>
</section>

  )
}

export default App
