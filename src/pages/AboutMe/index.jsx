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
          <figure className="image">
            <img src={imageBackground} alt="Capa do eBook sobre guitarra" />
          </figure>

          <header>
            <h1>Sobre mim</h1>
          </header>

          <article>
            <p>
              Minha paixão pela música nasceu cedo, influenciado pelos meus pais, que sempre foram fãs de bandas como Bon Jovi e Queen. Essas influências me marcaram profundamente desde pequeno. Aos 8 anos, ganhei meu primeiro violão, mas foi aos 13 que decidi aprender a tocar de forma autodidata, e desde então, a música se tornou uma parte essencial da minha vida.
            </p>

            <p>
              Aos 17 anos, realizei o sonho de ter minha primeira guitarra, e com o apoio de um grande amigo, que já havia estudado em conservatório, aprofundei meus conhecimentos no instrumento. Em 2020, no auge da pandemia, decidi trancar minha faculdade de Relações Internacionais para me dedicar totalmente à música. Estudei na EM&T, onde tive a honra de ser aluno do mestre Jefferson Ardanuy e me formei nos cursos Básico e Intermediário de Guitarra.
            </p>

            <p>
              Durante meus estudos, participei de aulas de prática em banda, o que me proporcionou um valioso networking e crescimento musical. Atualmente, sou integrante da banda ECO, onde toco com amigos e continuo a evoluir na música. Compartilho minha jornada musical no Instagram e TikTok, com o objetivo de inspirar outros músicos.
            </p>

            <blockquote>
              <p>
                "Se você decidiu aprender a tocar guitarra, tenha foco e constância. O conhecimento é algo que ninguém tira de você, portanto siga aquilo que você quer. A música transforma vidas!"
              </p>
              <footer>— Murillo Ressineti Silva</footer>
            </blockquote>
          </article>

          <SocialButtons />
        </section>
      </Content>
    </Container>
  );
}
