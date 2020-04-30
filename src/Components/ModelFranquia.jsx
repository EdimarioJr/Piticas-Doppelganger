import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 265px;
  height: 646px;
  border: 1px solid black;
  margin: 20px;
`;

const Imagem = styled.img`
  height: 265px;
  width: 263px;
`;

const Title = styled.div`
  padding: 10px 10px;
  background-color: ${props => props.titleColor || "orange"};
  text-align: center;
  border-bottom: 1px solid black;
`;

const Lista = styled.ul`
  padding: 20px 30px;
  list-style-type: disc;

  li {
    padding-top: 10px;
    font-weight: bolder;
    font-style: italic;
  }
`;

export default function Model(props) {
  return (
    <Container>
      <Imagem src={props.imagem} />
      <Title titleColor={props.titleColor}>
        <h2>{props.titulo}</h2>
      </Title>
      <Lista>
        {props.itens.map((atual, index) => (
          <li key={index}>{atual}</li>
        ))}
      </Lista>
    </Container>
  );
}
