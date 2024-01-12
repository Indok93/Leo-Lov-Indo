import { Cards } from "../Cards/Cards"
import styles from "./CardWrapper.module.scss"

export const CardWrapper = () => {
  return (
    <div className={styles.wrapper}>
        <Cards title="Familieret" text="Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig."/>
        <Cards title="Ejendomsret" text="Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det."/>
        <Cards title="Konkurs" text="Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp"/>
        <Cards title="Selskabsret" text="Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag."/>
    </div>
  )
}
