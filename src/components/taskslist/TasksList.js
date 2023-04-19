import React from 'react'
import './tasksList.css'

function TasksList({tasks, deleteTask, setTasks}) {

  function changeCompleteness(id, completed) {
      setTasks((prevTasks) => {
          return prevTasks.map(task => {
            if (task.id === id) {
              return {...task, complete: completed}
            }

            return task
          })
      })


  }

  return (
    <>
        {tasks.map((task, ind) => {
            return (<div className="my-task" key={ind + 1}>
                        <input type="checkbox" checked={task.complete} id={`task${ind + 1}`} onChange={(e) => changeCompleteness(task.id, e.target.checked)}/>
                        <label htmlFor={`task${ind + 1}`}>{`${task.content} for ${task.id}`}</label>
                        <button className="btn delete" onClick={() => deleteTask(ind + 1)}>DELETE</button>
                    </div>)
        })}
    </>
  )
}

export default TasksList