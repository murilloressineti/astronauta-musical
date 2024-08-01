import React from "react";
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
          <figure className="ebook">
            <img
              src={imageBackground}
              alt="Capa do eBook - O Universo da Guitarra"
            />
          </figure>

          <div className="text-content">
            <div className="intro-text">
              <h1>
                Domine a guitarra: adquira o guia <span>definitivo</span>
              </h1>
            </div>

            <article>
              <p>
                Comece sua jornada musical hoje e desvende todos os segredos da
                guitarra com nosso guia completo!
              </p>
            </article>

            <footer className="buttons">
              <Button />
              <SocialButtons />
            </footer>
          </div>
        </section>
      </Content>
    </Container>
  );
}
