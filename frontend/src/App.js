import React,{useEffect,useState} from 'react';
import axios from 'axios'
import TaskAdd from './Components/TaskAdd/TaskAdd';
import './App.css';
import List from './Components/List/List';


;

function App() {
  const [alltask, setAllTask] = useState([])
  const [completedtask, setCompletedTask] = useState([])
  const [notcompletedtask, setNotCompletedTask] = useState([])
    useEffect(() => {
       getAllTaks(); 
    }, []);

    useEffect(()=>{
      const array = alltask.filter((item)=>item.isCompleted===true)
      setCompletedTask(array)
    },[alltask])

    useEffect(()=>{
      const array = alltask.filter((item)=>item.isCompleted===false)
      setNotCompletedTask(array)
    },[alltask])


    const getAllTaks = async() =>{
       const {data} =  await axios.get("/api/v1/getalltask")
       console.log(data.taskitem)
       setAllTask(data.taskitem)
    }

    const deleteItem= async(id)=>{
      console.log(id)
      alert("deleted successfully please refresh")
      await axios.post("/api/v1/delete",{_id:id})
      
    }


  return (
    <>
<TaskAdd/>
<List alltask={alltask} completedtask={completedtask} notcompletedtask={notcompletedtask} deleteItem={deleteItem}/>


</>  );
}

export default App;
