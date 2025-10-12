import { useContext } from 'react'
import styles from './ThemeChanger.module.css'
import { ThemeContext } from '../../context/ThemeContext'

export default function ThemeChanger() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={styles.container}>
      <h1 style={{ margin: 0, padding: 0 }}>{theme === 'dark' ? '🌙' : '☀️'}</h1>
      <button
        onClick={toggleTheme}
        className={styles.themeButton}
      >
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  )
}
