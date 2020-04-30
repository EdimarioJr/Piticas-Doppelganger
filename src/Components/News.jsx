import React from "react";
import styled from "styled-components";

const NewsPiticas = styled.div`
  width: 100%;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-gap: 15px;
  background-color: white;
  margin-bottom: 40px;

  #noticias {
    padding: 20px;
  }

  img {
    border-right: 1px solid black;
    width: 100%;
    height: 100%;
  }

  h2 {
    display: inline-block;
    font-weight: bolder;
    margin-bottom: 10px;
    text-align: left;
  }

  #data {
    float: right;
  }

  #fonte {
    float: left;
  }

  h4 {
    display: inline;
    font-weight: normal;
    color: #7b7b7b;
  }

  h4 + p {
    font-weight: bolder;
    display: inline;
  }

  #data + p {
    color: #7b7f82;
    font-style: italic;
    line-height: 1.5;
  }

  hr {
    border: 0.5px solid #7b7b7b;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  p:nth-of-type(2) {
    color: orange;
    float: right;
    font-weight: bolder;
    font-size: 20px;
  }
`;

export default function News(props) {
  return (
    <NewsPiticas>
      <img src={props.imagem} alt="imagem noticia" />
      <div id="noticias">
        <h2>{props.titulo}</h2>
        <div id="data">
          <h4>DATA: </h4>
          <p>{props.data}</p>
        </div>
        <p>{props.conteudo}</p>
        <hr />
        <div id="fonte">
          <h4>FONTE: </h4>
          <p>{props.fonte}</p>
        </div>
        <p>Acesse o conteúdo</p>
      </div>
    </NewsPiticas>
  );
}
