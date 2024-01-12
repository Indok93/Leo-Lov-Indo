import image1 from "../../assets/images/2.jpg"
import styles from "./Section1.module.scss"

export const Section1 = ({ title, children }) => {
  return (
    <section className={styles.wrapper}>
        <img src={image1} alt="image1" />
        <article>
          <h2>{title}</h2>
          <>{children}</>
        </article>
    </section>
  )
}