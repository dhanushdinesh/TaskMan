import React from 'react'

export default function Tasklist({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  }

  const formatDueDate = (value) => {
    if (!value) return null;
    const date = new Date(value);
    return date.toLocaleString([], { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
  }

  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <div>
            <span>{task.completed && '✓ '}{task.text}</span>
            <small>({task.priority} , {task.category})</small>
            {task.dueDate && (
              <small className="due-date">⏰ {formatDueDate(task.dueDate)}</small>
            )}
          </div>

          <div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}