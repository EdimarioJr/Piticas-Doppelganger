import React from "react";
import styled from "styled-components";

const CardPiticas = styled.div`
  background-image: url(${props => props.back});
  background-size: 100% 70%;
  background-repeat: no-repeat;
  text-align: center;

  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 400px;
  #produto {
    height: 70px;
    width: 100%;
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bolder;
  width: 100%;
  background-color: black;
  border: none;

  h3 {
    padding: 20px 0;
  }

  &:hover {
    background-color: #1134a6;
    transition: all 0.3s;
    cursor: pointer;
  }
`;

export default function Card(props) {
  return (
    <>
      <CardPiticas back={props.imagem}>
        <h3 id="produto">{props.produto}</h3>
        <Button>
          <h3>SHOP</h3>
        </Button>
      </CardPiticas>
    </>
  );
}
