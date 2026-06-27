import React from 'react'

export default function ProgressTracker({ tasks }) {
  const totalTasks = tasks.length;
  const completedTask = tasks.filter((task) => task.completed).length;
  const remainingTask = totalTasks - completedTask;
  const progress = totalTasks === 0 ? 0 : Math.round((completedTask / totalTasks) * 100);

  return (
    <div className='progress-tracker'>
      <div className="progress-header">
        <h2>Your Progress</h2>
        <span className="progress-percent">{progress}%</span>
      </div>

      <div className='progress-bar'>
        <div className='progress' style={{ width: `${progress}%` }}></div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-value">{totalTasks}</span>
          <span className="stat-label">Total Tasks</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{completedTask}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{remainingTask}</span>
          <span className="stat-label">Remaining</span>
        </div>
      </div>
    </div>
  );
}