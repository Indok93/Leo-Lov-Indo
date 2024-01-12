import image1 from "../../assets/images/2.jpg"
import styles from "./ContentWrapper.module.scss"

export const ContentWrapper = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
        <img src={image1} alt="image1" />
        <article>
          <h2>{title}</h2>
          <>{children}</>
        </article>
    </div>
  )
}