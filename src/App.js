import { useState, useEffect, useRef } from "react";
import Tasks from "./components/tasks/Tasks";


function App() {

  
  const [tasks, setTasks] = useState(() => {
    const localVal = localStorage.getItem("tasks")

    if (localStorage["tasks"]) {
      return JSON.parse(localStorage.getItem("tasks"))
    } else {
      return []
    }
  })
  const taskRef = useRef()
  
  function addTask() {
    const taskInputValue = taskRef.current.value
    
    if (taskInputValue === '') {
      console.log("type something in idiot")
      return
    }
    
    setTasks((prevTasks) => {
      return [
        ...prevTasks, 
        {id: prevTasks.length ? prevTasks[prevTasks.length - 1].id + 1 : 1, content: taskInputValue, complete: false} 
      ]
    })

    taskRef.current.value = ""
    
  }


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  
  return (
    <div className="App">
      <div className="input-task">
        <input type="text" id="taskInput" ref={taskRef}/>
        <label htmlFor="taskInput">Enter Task</label>
      </div>
      <button className="btn add" onClick={addTask}>ADD</button>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
