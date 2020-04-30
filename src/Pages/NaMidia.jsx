import React from "react";
import styled from "styled-components";
import { Container } from "../utilsComponents/utilsComponents";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import News from "../Components/News";

import piticasMidia from "../images/titulomidia.png";
import ultimato from "../images/noticia-ultimato.jpg";
import store from "../images/noticia-store.jpg";
import abf from "../images/noticia-abf.png";

const Banner = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 5px;
  margin-bottom: 20px;
  background-image: url(${props => props.imagem});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid black;

  img {
    padding: 30px 0;
    margin-left: 230px;
    height: 100%;
  }
`;

export default function Fidelidade() {
  return (
    <>
      <Header />
      <Banner>
        <img src={piticasMidia} alt="piticas por ai" />
      </Banner>
      <Container>
        <News
          imagem={piticasMidia}
          titulo={"Piticas inaugura loja com experiência para consumidores"}
          data={"05/01/2020"}
          conteudo={
            "A rede de franquia Piticas inaugurou em novembro de 2019 a Piticas Experience, uma loja com 180 metros quadrados, para levar um pouco da emoção que a empresa proporciona em grandes eventos como a Comic Con e a Brasil Game Show. A unidade está localizada no Shopping SP Market, em São Paulo (SP). “Sentimos falta de o cliente estar em ambientes diferentes dentro do shopping, mas as lojas de 30 ou 40 metros quadrados inviabilizavam isso. Após a oportunidade de ocupar espaços maiores, criamos um novo modelo de negócios, a Piticas Experience, focada em experiência e produtos”, conta o sócio-fundador da marca Felipe Rossetti. A Piticas Experience prevê a abertura de uma nova loja de 230 metros quadrados no Norte Shopping, na cidade do Rio de Janeiro. Para 2020 já estão programadas a inauguração no Shopping Tucuruvi, em São Paulo (SP) e outra em Fortaleza (CE). Com atrações especiais, que mudarão a cada três meses ou menos, os espaços terão tudo para atrair os consumidores da marca, carinhosamente conhecidos como pitifãs. "
          }
          fonte={" O Mundo das Franquias"}
        />
        <News
          imagem={ultimato}
          titulo={"Piticas inaugura loja com experiência para consumidores"}
          data={"05/01/2020"}
          conteudo={
            "A rede de franquia Piticas inaugurou em novembro de 2019 a Piticas Experience, uma loja com 180 metros quadrados, para levar um pouco da emoção que a empresa proporciona em grandes eventos como a Comic Con e a Brasil Game Show. A unidade está localizada no Shopping SP Market, em São Paulo (SP). “Sentimos falta de o cliente estar em ambientes diferentes dentro do shopping, mas as lojas de 30 ou 40 metros quadrados inviabilizavam isso. Após a oportunidade de ocupar espaços maiores, criamos um novo modelo de negócios, a Piticas Experience, focada em experiência e produtos”, conta o sócio-fundador da marca Felipe Rossetti. A Piticas Experience prevê a abertura de uma nova loja de 230 metros quadrados no Norte Shopping, na cidade do Rio de Janeiro. Para 2020 já estão programadas a inauguração no Shopping Tucuruvi, em São Paulo (SP) e outra em Fortaleza (CE). Com atrações especiais, que mudarão a cada três meses ou menos, os espaços terão tudo para atrair os consumidores da marca, carinhosamente conhecidos como pitifãs. "
          }
          fonte={" O Mundo das Franquias"}
        />
        <News
          imagem={store}
          titulo={"Piticas inaugura loja com experiência para consumidores"}
          data={"05/01/2020"}
          conteudo={
            "A rede de franquia Piticas inaugurou em novembro de 2019 a Piticas Experience, uma loja com 180 metros quadrados, para levar um pouco da emoção que a empresa proporciona em grandes eventos como a Comic Con e a Brasil Game Show. A unidade está localizada no Shopping SP Market, em São Paulo (SP). “Sentimos falta de o cliente estar em ambientes diferentes dentro do shopping, mas as lojas de 30 ou 40 metros quadrados inviabilizavam isso. Após a oportunidade de ocupar espaços maiores, criamos um novo modelo de negócios, a Piticas Experience, focada em experiência e produtos”, conta o sócio-fundador da marca Felipe Rossetti. A Piticas Experience prevê a abertura de uma nova loja de 230 metros quadrados no Norte Shopping, na cidade do Rio de Janeiro. Para 2020 já estão programadas a inauguração no Shopping Tucuruvi, em São Paulo (SP) e outra em Fortaleza (CE). Com atrações especiais, que mudarão a cada três meses ou menos, os espaços terão tudo para atrair os consumidores da marca, carinhosamente conhecidos como pitifãs. "
          }
          fonte={" O Mundo das Franquias"}
        />
        <News
          imagem={abf}
          titulo={"Piticas inaugura loja com experiência para consumidores"}
          data={"05/01/2020"}
          conteudo={
            "A rede de franquia Piticas inaugurou em novembro de 2019 a Piticas Experience, uma loja com 180 metros quadrados, para levar um pouco da emoção que a empresa proporciona em grandes eventos como a Comic Con e a Brasil Game Show. A unidade está localizada no Shopping SP Market, em São Paulo (SP). “Sentimos falta de o cliente estar em ambientes diferentes dentro do shopping, mas as lojas de 30 ou 40 metros quadrados inviabilizavam isso. Após a oportunidade de ocupar espaços maiores, criamos um novo modelo de negócios, a Piticas Experience, focada em experiência e produtos”, conta o sócio-fundador da marca Felipe Rossetti. A Piticas Experience prevê a abertura de uma nova loja de 230 metros quadrados no Norte Shopping, na cidade do Rio de Janeiro. Para 2020 já estão programadas a inauguração no Shopping Tucuruvi, em São Paulo (SP) e outra em Fortaleza (CE). Com atrações especiais, que mudarão a cada três meses ou menos, os espaços terão tudo para atrair os consumidores da marca, carinhosamente conhecidos como pitifãs. "
          }
          fonte={" O Mundo das Franquias"}
        />
      </Container>
      <Footer />
    </>
  );
}
