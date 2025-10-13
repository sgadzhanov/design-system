import styles from './App.module.css'
import Button from './components/button/Button'
import EmailInput from './components/input/cases/EmailInput'
import ErrorInput from './components/input/cases/ErrorInput'
import NumberInput from './components/input/cases/NumberInput'
import PasswordInput from './components/input/cases/PasswordInput'
import SearchInput from './components/input/cases/SearchInput'
import ThemeChanger from './components/theme-mode/ThemeChanger'

function App() {
  return (
    <main className={styles.page}>
      <ThemeChanger />
      <div className={styles.cases}>
        <div className={styles.case}>
          <Button variant="text" size="sm">Text</Button>
          <Button variant="contained" size="md">Contained</Button>
          <Button variant="contained" size="md" isDisabled={true}>Contained</Button>
          <Button variant="outlined" size="lg">Outlined</Button>
          <Button variant="outlined" size="lg" isLoading={true}>Outlined</Button>
        </div>
        <div
          className={styles.case}
          style={{ flexDirection: 'column' }}
        >
          <EmailInput />
          <PasswordInput />
          <NumberInput />
          <SearchInput />
          <ErrorInput />
        </div>
      </div>
    </main>
  )
}

export default App
