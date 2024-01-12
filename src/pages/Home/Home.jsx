import { CardWrapper } from "../../components/CardWrapper/CardWrapper";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";

export const Home = () => {
  return (
    <main>
      <CardWrapper />
      <ContentWrapper title="Forside">
        <p>Velkommen til min side</p>
      </ContentWrapper>
    </main>
  )
}
