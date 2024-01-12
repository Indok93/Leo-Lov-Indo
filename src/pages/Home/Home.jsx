import { CardWrapper } from "../../components/CardWrapper/CardWrapper";
import { Section1 } from "../../components/Section1/Section1";
import { Section2 } from "../../components/Section2/Section2";

export const Home = () => {
  return (
    <main>
      <CardWrapper />
      <Section1 title="INTET PROBLEM">
        <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.</p>
        <p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
      </Section1>
      <Section2 title="HER BOR VI">
        <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.</p>
        <p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
      </Section2>
    </main>
  )
}
