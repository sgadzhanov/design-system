import styles from './App.module.css'
import ThemeChanger from './components/theme-mode/ThemeChanger'

function App() {
  return (
    <main className={styles.page}>
      <ThemeChanger />
    </main>
  )
}

export default App
