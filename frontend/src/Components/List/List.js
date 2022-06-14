import React,{useState,useEffect} from 'react'
import axios from "axios"
import Styles from './List.module.css'
import ListItem from '../ListItem/ListItem';

const List = ({alltask,completedtask, notcompletedtask, deleteItem}) => {
    const [all, setAll] = useState(true);
    const [completed, setCompleted] = useState(false);
    const [notCompleted, setNotCompleted] = useState(false);
    
  return (
    <>
    <div className={Styles.filter}>
    <lable>
        <input type="checkbox" checked={all} onChange={()=>{setAll(!all); console.log(all)}}/>
        ALL
    </lable>

    <lable>
        <input type="checkbox" checked={completed} onChange={()=>{setCompleted(!completed); console.log(completed)}}/>
        Completed
    </lable>

    <lable>
        <input type="checkbox" checked={notCompleted} onChange={()=>{setNotCompleted(!notCompleted); console.log(notCompleted)}}/>
        NotCompleted
    </lable>
    </div>

    <div>

    {all ? "all" : ""}
    {completed ? "completed ": ""}
    {notCompleted ? "completednpt" : ""}

    </div>
{
all && alltask.map((item)=><ListItem id={item._id} item={item.task} deleteItem={deleteItem}/>)
}

{
    completed && completedtask.map((item)=><ListItem id={item._id} item={item.task} deleteItem={deleteItem}/>)
}
   
{
    notCompleted && notcompletedtask.map((item)=><ListItem id={item._id} item={item.task} deleteItem={deleteItem}/>)
}
    </>
  )
}

export default List