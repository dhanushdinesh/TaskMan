import React from 'react'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
    >
      <span className="theme-toggle-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
      <span className="theme-toggle-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}