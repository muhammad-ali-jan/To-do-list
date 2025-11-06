import React,{ useState } from "react"
function ToDoList() {
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value)

    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks((t)=>[...t,newTask]);
        setNewTask=("");
        }
        


    }

    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=> i!==index);
        setTasks(updatedTasks);

    }
    function moveTaskUp(index){
          if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
          }
    }
     function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
          }

    }
    return(
        <div className="flex flex-col items-center gap-3 mt-20 justify-center">
            <h1 className="font-bold text-5xl">To Do List</h1>

            <div className="flex mt-5">
                <input type="text"
                 placeholder="Enter a Task...." 
                 value={newTask} className="text-2xl p-1 border-2 shadow-2xl" 
                 onChange={handleInputChange}/>
                <button className="bg-green-500 hover:bg-green-600 cursor-pointer transition duration-400 ease-in-out font-bold text-white border-gray-600 ml-1 p-2.5 px-4 rounded" onClick={addTask}>Add</button>
            </div>
            <ol className="flex flex-col gap-4 mt-3"> 
                {tasks.map((task,index)=>
                    <li  key={index} className="text-2xl flex gap-4 font-bold p-3 px-4 shadow-2xl"><span className="bg-amber-50">{task}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer transition duration-400 ease-in-out font-bold text-white border-gray-600 m-1 px-3 rounded" onClick={()=>{deleteTask(index)}}>Delete</button>
                    <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer transition duration-400 ease-in-out font-bold text-white border-gray-600 m-1 px-3 rounded" onClick={()=>{moveTaskUp(index)}}>Up</button>
                    <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer transition duration-400 ease-in-out font-bold text-white border-gray-600 m-1 px-3 rounded" onClick={()=>{moveTaskDown(index)}}>Down</button>

                    </li>
                )}
            </ol>
        </div>
    )
}


export default ToDoList