import React, {useState} from 'react';
import axios from "axios";
import Styles from './TaskAdd.module.css'

const TaskAdd = ({getAllTask}) => {

  const [task, setTask] = useState('');

  const taskChangeHandler = async() =>{
    try{
        const {data} = await axios.post("/api/v1/addtask",{task:task});
        console.log(data)
        getAllTask()
    }
    catch(error){
        alert("Opps! There is an Error")
    }
  }

  return (
    <>
    <div className={Styles.Container}>
        <h1>My To Do List</h1>
        <div className={Styles.inputcontainer}>

        <input className={Styles.input} placeholder='title' value={task} onChange={(e)=>{setTask(e.target.value)}} />
        <button className={Styles.button} onClick={taskChangeHandler}>Add</button>
        </div>
    </div>
    </>
  )
}

export default TaskAdd