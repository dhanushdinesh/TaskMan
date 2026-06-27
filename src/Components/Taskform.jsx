import React from 'react'
import { useState } from 'react'

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('general');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    addTask({ text: task, priority, category, dueDate, completed: false });

    // reset state
    setTask('');
    setPriority('medium');
    setCategory('general');
    setDueDate('');
  }

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <div id='inp'>
        <input type='text' placeholder='Enter your task' onChange={(e) => setTask(e.target.value)} value={task} />
        <span><button type='submit'>Add Task</button></span>
      </div>

      <div id='btns'>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>

        <input
          type="datetime-local"
          className="due-date-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
    </form>
  )
}