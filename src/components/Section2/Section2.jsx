import image2 from "../../assets/images/3.jpg"
import styles from "./Section2.module.scss"

export const Section2 = ({ title, children }) => {
  return (
    <section className={styles.wrapper}>
        <article>
          <h2>{title}</h2>
          <>{children}</>
        </article>
        <img src={image2} alt="image2" />
    </section>
  )
}