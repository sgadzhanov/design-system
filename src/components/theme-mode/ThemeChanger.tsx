import styles from './ThemeChanger.module.css'

export default function ThemeChanger() {
  return (
    <div className={styles.container}>
      <span className={styles.themeText}>Theme</span>
      <button className={styles.lightThemeButton}>Light</button>
      <button className={styles.darkThemeButton}>Dark</button>
    </div>
  )
}
