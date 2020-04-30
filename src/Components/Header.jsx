import React from "react";
import styled from "styled-components";
import piticaLogo from "../images/logo-piticas.png";
import bgBlack from "../images/bg_black.png";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: blueviolet;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  height: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image: url(${bgBlack});
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: sans-serif;
  ul {
    display: inline;
  }
  li {
    display: inline-block;
    padding: 15px;
  }
  img {
    width: 100px;
    height: 100px;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <ul id="antesImg">
        <li>
          <StyledLink to="/licencas">Licenças</StyledLink>
        </li>
        <li>
          <StyledLink to="/franquia">Franquia</StyledLink>
        </li>
        <li>
          <StyledLink to="/lojas">Lojas</StyledLink>
        </li>
        <li>
          <StyledLink to="/pitiFas">Piti Fãs</StyledLink>
        </li>
        <li>
          <StyledLink to="/naMidia">Na mídia</StyledLink>
        </li>
      </ul>
      <img src={piticaLogo} alt="logo pitica" />
      <ul id="dpsImg">
        <li>
          <StyledLink to="/quemSomos">Quem somos</StyledLink>
        </li>
        <li>
          <StyledLink to="/fidelidade">Programa de Fidelidade</StyledLink>
        </li>
        <li>
          <StyledLink to="/shop">Shop</StyledLink>
        </li>
      </ul>
    </StyledHeader>
  );
}
