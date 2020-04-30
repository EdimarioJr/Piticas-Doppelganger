import React from "react";
import styled from "styled-components";
import { Container } from "../utilsComponents/utilsComponents";
import Header from "../Components/Header";
import Slides from "../Components/Slides";
import LinkBox from "../Components/LinkBox";
import Form from "../Components/Form";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";
import About from "../Components/About";
import Footer from "../Components/Footer";

import funko from "../images/funko.jpg";
import meias from "../images/meias.jpg";
import morty from "../images/morty.jpg";
import moleton from "../images/moleton_morty.png";
import banner from "../images/piticas-banner.jpg";
import franquia from "../images/banner-franquia.jpg";
import starwars from "../images/starwars.png";
import joker from "../images/joker.png";
import marvel from "../images/marvel.png";
import harry from "../images/harrypotter.png";
import riverdale from "../images/riverdale.png";
import dragonball from "../images/dragonball.png";

const Banner = styled.div`
  background-image: url(${banner});
  background-size: cover;
  border: 1px solid black;
  height: 130px;
  margin-bottom: 40px;
`;

const BannerForm = styled(Banner)`
  height: 1000px;
  background-size: cover;
  background-image: url(${franquia});
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  margin-top: 40px;
`;

const HalfGrid = styled(Grid)`
  grid-template-columns: 1fr 1fr;
  margin-bottom: 40px;
`;

const GridBanner = styled(Grid)`
  height: 1000px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;
`;

export default function Homepage() {
  return (
    <>
      <Header />
      <Slides />
      <Container>
        <Grid>
          <LinkBox
            firstSen={"COLEÇÃO"}
            secondSen={"FUNKO"}
            altura={400}
            image={funko}
          />
        </Grid>
        <HalfGrid>
          <LinkBox
            firstSen={"COLEÇÃO"}
            secondSen={"MEIAS"}
            altura={300}
            image={meias}
          />
          <LinkBox
            firstSen={"COLEÇÃO"}
            secondSen={"RICK E MORTY"}
            altura={300}
            image={morty}
          />
        </HalfGrid>
        <Banner />
        <GridBanner>
          <BannerForm />
          <Form />
        </GridBanner>

        <Carousel
          cards={[
            <Card
              imagem={moleton}
              produto={"Moleton Hoodie Ricky & Morty"}
              key={1}
            />,
            <Card
              imagem={starwars}
              produto={"Camisa Dupla Face Star Wars Ep VIII"}
              key={2}
            />,
            <Card imagem={joker} produto={"Camisa Joker Risada"} key={3} />,
            <Card
              imagem={dragonball}
              produto={"Jaqueta Bomber Super Dragon Ball"}
              key={4}
            />,
            <Card
              imagem={harry}
              produto={"Camiseta Harry Potter Lumo Maximo"}
              key={5}
            />,
            <Card
              imagem={riverdale}
              produto={"Camiseta Riverdale Uniforme Azul"}
              key={6}
            />,
            <Card
              imagem={marvel}
              produto={"Camiseta Plus Size Marvel Logo"}
              key={7}
            />
          ]}
        />
        <About />
      </Container>
      <Footer />
    </>
  );
}
