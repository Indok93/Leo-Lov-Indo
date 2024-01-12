import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerbackground}>
      <div>
        <h1>Leo<span>-Lov</span></h1>
        <p>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
      </div>
    </header>
  )
}
