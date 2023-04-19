import React from 'react'
import TasksList from '../taskslist/TasksList'

function Tasks({tasks, setTasks}) {

    const deleteTask = id => {
        const newTasksList = tasks.filter(task => (task.id !== id))
        console.log(newTasksList)
        const mappedNewTasks = newTasksList.map((task, index) => {
            return {...task, id: index + 1}
        })

        setTasks(mappedNewTasks)
    }

    const taskListStyles = {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    }

  return (
    <div className='tasks-list' style={taskListStyles}>
        <TasksList tasks={tasks} deleteTask={deleteTask} setTasks={setTasks}/>
    </div>
  )
}

export default Tasks