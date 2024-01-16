
import styles from "./Footer.module.scss"

export const Footer = () => {
    return (
      <footer className={styles.footerbg}>
        <div className={styles.wrapper}>
          <div className={styles.list}>
            <h2>Adresse</h2>
            <p>Find os her:</p>
            <p>Vestervænget 232, 30.sal</p>
            <p>6574 Øster Nørup</p>
            <p>Danmark</p>
          </div>
          <div className={styles.list}>
            <h2>Kontakt</h2>
            <p>Kotankt os her:</p>
            <p>email@mail.dk</p>
            <p>Tlf: 0192 3023</p>
          </div>
          <div className={styles.list}>
            <h2>Politik</h2>
            <p>Vores politikker:</p>
            <p>Privatlivspolitik</p>
            <p>Cookiepolitik</p>
            <p>Generelle betingelser</p>
          </div>
          <div className={styles.list}>
            <h2>Sociale medier</h2>
            <div className={styles.iconwrapper}>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  