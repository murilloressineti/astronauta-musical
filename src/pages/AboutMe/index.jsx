import React from 'react'; 
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { SocialButtons } from "../../components/SocialButtons";

import imageBackground from "../../assets/capa-ebook.png";

export function AboutMe() {
  return (
    <Container>
      <Header />

      <Content>
        <section>
          <div className="image">
            <img src={imageBackground} alt="" />
          </div>

          <h1>Sobre mim</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            incidunt veniam dignissimos voluptatibus, nisi officia eaque
            deleniti hic corporis quas distinctio? Laboriosam tempore maxime
            veritatis nesciunt blanditiis provident saepe qui.
          </p>

          <SocialButtons />
        </section>
      </Content>
    </Container>
  );
}
