import styles from "./Cards.module.scss"

export const Cards = ({ title, text }) => {
  return (
    <div className={styles.card}>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}
