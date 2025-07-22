import { useState } from 'react'
import './index.css'
function App() {
  
  const [task,setTask]=useState("");
  const [tasklist,setTaskList]=useState(["Hello","Hi"]);


  const addTask=function(){

    if(task.trim()!==""){
    setTaskList(t=>[...t,task]);
    setTask("");
    }
      
  }

  function deleteTask(index){
    const updatedTasks=tasklist.filter((element,i)=>i!=index);
    setTaskList(updatedTasks);
  }

  function moveTaskUp(index){
    if(index>0){
      const updatedTasks=[...tasklist];
      [updatedTasks[index],updatedTasks[index-1]]=
      [updatedTasks[index-1],updatedTasks[index]];
      setTaskList(updatedTasks);
    }
  }
  function moveTaskDown(index){
    if(index<tasklist.length-1){
      const updatedTasks=[...tasklist];
      [updatedTasks[index],updatedTasks[index+1]]=
      [updatedTasks[index+1],updatedTasks[index]];
      setTaskList(updatedTasks);
    }
  }


  return (
    <>
        <div className="main-container  w-2xl border-slate-800 mt-20">
        <h1 className='text-6xl font-bold text-center'>To-Do-List</h1>

        <div className="fields  m-2 flex justify-center">
          <input type="text" value={task}    onChange={(e) => setTask(e.target.value)}placeholder='Add Task to do' className='w-90 outline h-15 p-5 rounded-2xl mt-10  
          text-slate-950 text-2xl border-2' />
          <button className='h-15 w-30 rounded-2xl  border-2 bg-green-500 mt-10 ml-2 px-5 pt-2 pb-2 text-center font-bold cursor-pointer text-2xl' onClick={addTask}>Add</button>
        </div>
        </div>

        <div className="tasks  w-2xl mt-10">

        <ol className='p-0 flex-col justify-center'>
          {tasklist.map((item,index)=>
            <li key={index} className='bg-gray-400 mt-5 mb-5 p-2 pl-10 pr-5 flex items-center font-bold text-2xl rounded-2xl'>
              <span className='basis-1/2'>{item}</span>
              <button className='delete-btn  ml-10   rounded-2xl h-15 w-25 cursor-pointer bg-red-500'
               onClick={()=>deleteTask(index)}>Delete</button>
              <button className='move-btn ml-5 rounded-2xl h-15 w-25 cursor-pointer bg-emerald-700'
               onClick={()=>moveTaskUp(index)}>👆</button>
              <button className='move-btn ml-5 rounded-2xl h-15 w-25 cursor-pointer bg-emerald-700'
               onClick={()=>moveTaskDown(index)}>👇</button>
            </li>
          )}
        </ol>
          

        </div>
    </>
  )
}

export default App
