import React from "react";
import styled from "styled-components";
import banner from "../images/banner-franquia2.jpg";
import { Container } from "../utilsComponents/utilsComponents";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ModelFranquia from "../Components/ModelFranquia";
import Form from "../Components/Form";
import Footer from "../Components/Footer";

import banner1 from "../images/piticas-banner.jpg";
import modeloLoja from "../images/modeloLoja.jpg";
import modeloRua from "../images/modeloRua.jpg";
import modeloQuiosque from "../images/modeloQuiosque.jpg";
import ladoFa from "../images/ladoFa.jpg";
import predioFranq from "../images/predioFranquia.jpg";

const Banner2 = styled.div`
  background-image: url(${banner1});
  background-size: cover;
  border: 1px solid black;
  height: 130px;
  margin-bottom: 40px;
  margin-top: 70px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const DoubleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 40px;

  img {
    border: 1px solid black;
  }

  p {
    line-height: 27px;
  }
`;

const Separador = styled.div`
  margin: 40px 0px;

  hr {
    border: 0.5px solid black;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

export default function Fidelidade() {
  return (
    <>
      <Header />
      <Banner imagem={banner} />
      <Container>
        <DoubleGrid>
          <Form />
          <img src={ladoFa} alt="adsa" />
        </DoubleGrid>
      </Container>
      <Separador>
        <hr />
      </Separador>
      <Container>
        <Title>MODELO DE NEGÓCIOS</Title>
        <Grid>
          <ModelFranquia
            imagem={modeloLoja}
            titulo={"Modelo Loja"}
            titleColor="#22f3f1"
            itens={[
              "Modelo direcionado para shoppings e aeroportos, com possibilidade para lojas de rua.",
              "O tamanho das lojas pode variar de 30 a 60m2.",
              "Estoque para cerca de 4 mil peças.",
              "Exposição de mais de 150 modelos diferentes, e mix de produtos adicionais exclusivo para esse formato."
            ]}
          />
          <ModelFranquia
            imagem={modeloQuiosque}
            titulo={"Modelo Quiosque"}
            titleColor="#ff8e2a"
            itens={[
              "Modelo direcionado para corredores de shoppings, galerias comerciais, aeroportos, metrôs, rodoviárias e hipermercados.",
              "O tamanho dos quiosques com padrão de 8m2 (podendo variar de 6m2 a 9m2).",
              "Estoque para cerca de 2 mil peças e exposição de mais de 150 modelos diferentes, e mix de produtos diversos.",
              "Layout com design exclusivo;"
            ]}
          />
          <ModelFranquia
            imagem={modeloRua}
            titulo={"Modelo Loja de Rua"}
            titleColor="#c24afa"
            itens={[
              "Modelo direcionado para ruas com alto movimento.",
              "O tamanho das lojas variam entre 30-80m2.",
              "Estoque para cerca de 4 mil peças.",
              "Exposição de mais de 150 modelos diferentes, e mix de produtos diversos."
            ]}
          />
        </Grid>
      </Container>
      <Separador>
        <hr />
      </Separador>
      <Container>
        <DoubleGrid>
          <img src={predioFranq} alt="predio da franquia" />
          <div>
            <Title style={{ textAlign: "left" }}>FRANQUIA</Title>
            <p>
              A Franquia Piticas ocupa o 43 lugar no ranking das maiores
              franquias do Brasil, com mais de 350 unidades franqueadas (ABF), e
              está entre as 5 mais amadas pelos Brasileiros (Revista exame). A
              franquia se destaca pela inovação em tecnologia, produção ágil com
              reposição semanal, e uma estrutura de franquia 100% focada no
              resultado dos nossos franqueados. Uma das grandes vantagens da
              franquia Piticas é sua produção 100% verticalizada, que garante a
              qualidade dos produtos, independência de fornecedores
              terceirizados, e dinamismo na produção de lançamentos.
            </p>
            <p>
              O time de expansão fará todo estudo de viabilidade para entender o
              melhor ponto para você abrir sua franquia. Nosso modelo de negócio
              se diferencia pela consultoria de campo/treinamento altamente
              qualificada, ajudando o franqueado não só em vendas, mas na gestão
              do negócio. O marketing é inovador com foco no ponto de venda,
              lançando campanhas pontuais para potencializar as vendas de nossas
              unidades. Também fazemos grandes investimentos em mídia: TV, Live
              Marketing, e mídias sociais são nossos maiores pilares
            </p>
          </div>
        </DoubleGrid>
      </Container>
      <Container>
        <Banner2 />
      </Container>
      <Footer />
    </>
  );
}
