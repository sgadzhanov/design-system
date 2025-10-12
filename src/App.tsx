import styles from './App.module.css'
import Button from './components/button/Button'
import ThemeChanger from './components/theme-mode/ThemeChanger'

function App() {
  return (
    <main className={styles.page}>
      <ThemeChanger />
      <div
        style={{ display: 'flex', gap: '.5rem', marginTop: '2rem' }}
      >
        <Button variant="text" size="sm">Text</Button>
        <Button variant="contained" size="md">Contained</Button>
        <Button variant="contained" size="md" isDisabled={true}>Contained</Button>
        <Button variant="outlined" size="lg">Outlined</Button>
        <Button variant="outlined" size="lg" isLoading={true}>Outlined</Button>
      </div>
    </main>
  )
}

export default App
