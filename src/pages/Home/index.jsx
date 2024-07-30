import React from 'react'; 
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
          <div className="ebook">
            <img src={imageBackground} alt="" />
          </div>

          <h1>Domine a guitarra: adquira o guia <span>definitivo</span></h1>

          <p>
            Comece sua jornada musical hoje e desvende todos os segredos da guitarra com nosso guia completo!
          </p>

          <div className="buttons">
            <Button />
            <SocialButtons />
          </div>
        </section>
      </Content>
    </Container>
  );
}
