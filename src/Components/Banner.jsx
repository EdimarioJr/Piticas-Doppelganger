import React from "react";
import styled from "styled-components";

const BannerPiticas = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.imagem});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 1px solid black;
`;

export default function Banner(props) {
  return <BannerPiticas imagem={props.imagem} />;
}
