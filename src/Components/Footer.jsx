import React from "react";
import styled from "styled-components";
import { Container } from "../utilsComponents/utilsComponents";
import bgNews from "../images/bg_newsletter.jpg";
import bgH4 from "../images/bg_h4.png";
import bgBlack from "../images/bg_black.png";
import logo from "../images/logo-piticas.png";

const Newsletter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${bgNews});
  padding: 50px 0;
  color: gray;
  margin-bottom: 50px;
  margin-top: 40px;

  #novidades {
    background-image: url(${bgH4});
    background-repeat: no-repeat;
    background-position: left bottom;
    padding-bottom: 20px;
    color: black;
  }
`;

const Entrada = styled.div`
  display: flex;
  flex-direction: row;

  input {
    display: block;
    margin-left: 50px;
    border: none;
    border-bottom: 1px solid black;
    padding: 3px;
    width: 400px;
    background-color: transparent;
  }

  button {
    background-color: white;
    padding: 15px 40px;
    margin-left: 20px;
    border: 1px solid black;
    font-weight: bolder;
    border-bottom: 2px solid black;
    box-shadow: 0 2px gray;
  }
`;

const NavFooter = styled.div`
  #footer {
    padding: 40px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url(${bgBlack});
    color: white;
    font-size: 11px;

    #grid {
      margin-left: 150px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 10px;
    }
  }

  #infos {
    padding: 40px 0;
    font-size: 12px;
    color: #9e9ca4;

    #right {
      float: right;
    }
  }
`;

export default function Footer(props) {
  return (
    <>
      <Newsletter>
        <div>
          <h2>
            RECEBA NOSSAS
            <div id="novidades">
              <strong>NOVIDADES</strong>
            </div>
          </h2>
        </div>
        <Entrada>
          <input type="text" placeholder="E-MAIL" />
          <button>ENVIAR</button>
        </Entrada>
      </Newsletter>
      <NavFooter>
        <div id="footer">
          <img src={logo} alt="logo piticas" />
          <div id="grid">
            <h2>Na midia</h2>
            <h2>Lojas</h2>
            <h2>Seja Franqueado</h2>

            <h2>Quem somos</h2>
            <h2>Contato</h2>
            <h2>Loja Virtual</h2>
          </div>
        </div>
        <Container>
          <div id="infos">
            <p>
              Piticas - Avenida Monteiro Lobato, 2297, Galpão 01, Vila Miriam
            </p>
            <p>07190-000-Guarulhos-SP | CNPJ: 13.756.472/0001-10</p>
            <p>© 2020 Piticas - Todos os direitos reservados.</p>
            <p id="right">
              Criação e Desenvolvimento [Edimário , feito com :D]
            </p>
          </div>
        </Container>
      </NavFooter>
    </>
  );
}
