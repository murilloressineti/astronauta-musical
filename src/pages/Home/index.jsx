import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { SocialButtons } from "../../components/SocialButtons";

import imageBackground from "../../assets/capa-ebook.png";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <section>
          <img src={imageBackground} alt="" className="ebook" />

          <h1>Domine a guitarra: adquira o guia definitivo</h1>

          <p>
            Comece sua jornada musical hoje e desvende todos os segredos da guitarra com nosso guia completo!
          </p>

          <Button />

          <SocialButtons />
        </section>
      </Content>
    </Container>
  );
}
