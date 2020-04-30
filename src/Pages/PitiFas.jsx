import React from "react";
import styled from "styled-components";
import { Container } from "../utilsComponents/utilsComponents";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Galeria from "../Components/Galeria";

import pitiFas from "../images/banner-pitifas.jpg";
import imgTitulo from "../images/galeriaTitulo.png";
import riverdale from "../images/riverdale.png";
import morty from "../images/morty.jpg";
import marvel from "../images/marvel.png";
import meias from "../images/meias.jpg";
import moleton from "../images/moleton_morty.png";
import harry from "../images/harrypotter.png";
import funko from "../images/funko.jpg";
import joker from "../images/joker.png";
import starwars from "../images/starwars.png";
import dragonball from "../images/dragonball.png";
import bannerInvista from "../images/banner-invista.jpg";

const DoubleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 30px;
  padding-bottom: 30px;
  padding-top: 40px;

  #galeria {
    justify-self: center;
  }

  #texto {
    justify-self: start;
    font-size: 18px;
  }
`;

const Banner2 = styled.div`
  background-image: url(${props => props.imagem});
  background-size: cover;
  border: 1px solid black;
  height: 220px;
  margin-bottom: 100px;
  margin-top: 70px;
`;

export default function Fidelidade() {
  return (
    <>
      <Header />
      <Banner imagem={pitiFas} />
      <div
        style={{
          border: "1px solid black",
          marginTop: "5px",
          marginBottom: "15px"
        }}
      >
        <Container>
          <DoubleGrid>
            <img src={imgTitulo} alt="galeria" id="galeria" />
            <div id="texto">
              <p>Olá Pitifã,</p>
              <p>
                Esse espaço é dedicado totalmente à você que permite com que a
                Piticas vista o seu lado fã com tudo que você mais curte, com os
                seus personagens favoritos..
              </p>
              <p>Vestindo e compartilhando a sua identidade.</p>
              <p>
                Somos uma Empresa Jovem , que cresceu rápido graças a sua
                vontade de ter produtos especiais e exclusivos sobre o Universo
                da Cultura POP.
              </p>
              <p>
                Venha com a gente mostrar o seu lado Fã! Estilo com conteúdo,
                personalidade, atitude. Então seja bem vindo! A casa é sua, é
                nossa é só entrar.
              </p>
            </div>
          </DoubleGrid>
        </Container>
      </div>
      <Container>
        <Galeria
          imagens={[
            pitiFas,
            marvel,
            riverdale,
            meias,
            morty,
            moleton,
            harry,
            funko,
            joker,
            starwars,
            dragonball,
            funko
          ]}
          elementosIniciais={8}
        />
      </Container>
      <Container>
        <Banner2 imagem={bannerInvista} />
      </Container>
      <Footer />
    </>
  );
}
