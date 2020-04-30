import React from "react";
import styled from "styled-components";

import { Container } from "../utilsComponents/utilsComponents";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

import quemSomos from "../images/banner-quemsomos.jpg";
import predio from "../images/predioFranquia.jpg";
import voando from "../images/voando-alto.jpeg";
import underline from "../images/underlinedOrange.png";
import got from "../images/3Got.png";
import got2 from "../images/3Got2.png";
import draca from "../images/dracarys.jpg";
import pantera from "../images/blackPanther.jpg";
import dumbo from "../images/dumbo.jpg";
import invista from "../images/banner-invista.jpg";

const DoubleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 40px;

  img {
    border: 1px solid black;
    height: 461px;
    width: 100%;
  }

  p {
    line-height: 27px;
  }

  #conteudo {
  }
`;

const Titulo = styled.h2`
  color: #000;
  text-shadow: 0 4px #dedede;
  text-transform: uppercase;
  font-weight: 700;
  padding-bottom: 30px;
  background: url(${props => props.imagem}) left bottom no-repeat;
  margin-bottom: 20px;
  font-size: 30px;
`;

const Hr = styled.hr`
  border: 1px solid black;
  margin: 50px 0px;
`;

const Galeria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  img {
    margin-right: 20px;
  }
`;

export default function Fidelidade() {
  return (
    <>
      {console.log({ dumbo })}
      <Header />
      <Banner imagem={quemSomos} />
      <Container>
        <DoubleGrid>
          <img src={voando} alt="irmaos" />
          <div id="conteudo">
            <Titulo imagem={underline}>PITICAS</Titulo>
            <p>
              A Piticas nasceu da ideia de dois irmãos, Vinicius e Felipe
              Rossetti, que após morarem por 10 anos nos Estados Unidos,
              retornaram ao Brasil em busca de uma oportunidade empreendedora.
              Os irmãos sempre foram muito fãs de cultura pop, em especial pelos
              filmes de super-heróis, séries e games. Após analisar vários
              mercados, tiveram a visão de um negócio que ainda não era
              explorado no Brasil, ainda não tinha profissionalização, o mercado
              de vestuário de peças licenciadas, mais especificamente camisetas.
              Eles mergulharam de cabeça para criar uma franquia diferenciada de
              qualquer coisa já vista no mercado, inicialmente foram abertos
              somente quiosques, hoje já conta com os modelos de quiosques e
              loja. Com uma produção 100% verticalizada, e o foco no
              desenvolvimento da criatividade e atentos a cada detalhe, os
              irmãos fundaram a primeira loja em 2010, e desde então acompanham
              todas as etapas de produção, treinamento de funcionários e
              satisfação dos clientes, prezando por qualidade e criatividade em
              seus produtos.
            </p>
          </div>
        </DoubleGrid>
      </Container>
      <Hr />
      <Container>
        <DoubleGrid>
          <p>
            A Franquia Piticas ocupa o 33º lugar no ranking das maiores
            franquias do Brasil, com mais de 450 unidades franqueadas(ABF), e
            está entre as 5 mais amadas pelos Brasileiros(Revista exame). A
            franquia se destaca pela inovação em tecnologia, produção ágil com
            reposição semanal, e uma estrutura de franquia 100% focada no
            resultado dos nossos franqueados. Uma das grandes vantagens da
            franquia Piticas é sua produção 100% verticalizada, que garante a
            qualidade dos produtos, independência de fornecedores terceirizados,
            e dinamismo na produção de lançamentos.
          </p>
          <img src={predio} alt="predio" />
        </DoubleGrid>
        <Hr />
        <Galeria>
          <Titulo imagem={underline}>GALERIA</Titulo>
          <Carousel
            cards={[
              <img src={dumbo} alt="dumbo" key={1} />,
              <img src={draca} alt="draca" key={1} />,
              <img src={got} alt="got" key={1} />,
              <img src={got2} alt="got2" key={1} />,
              <img src={pantera} alt="pantera" key={1} />
            ]}
          />
        </Galeria>
        <Banner imagem={invista} />
      </Container>

      <Footer />
    </>
  );
}
