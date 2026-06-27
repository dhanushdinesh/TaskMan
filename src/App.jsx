import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'
import ThemeToggle from './Components/ThemeToggle'

export default function App() {
  // Load saved tasks on first render instead of always starting empty
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Apply theme to <html> so it controls the whole page, not just the card
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newtasks = [...tasks];
    newtasks[index] = updatedTask;
    setTasks(newtasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <h1>Task Bro</h1>
      <h4><i>The friendly task manager</i></h4>
      <Taskform addTask={addTask} />
      <Tasklist tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />

      {tasks.length > 0 &&
        (<button onClick={clearTasks}
          className='clear-btn'>
          Clear All Tasks</button>)}
    </div>
  )
}