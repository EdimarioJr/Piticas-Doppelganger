import React from "react";
import styled from "styled-components";

import LinkBox from "../Components/LinkBox";

const GaleriaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 40px 0px;
`;

const DivButton = styled.div`
  margin: 30px 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 220px;
    background-color: white;
    border: 1px solid black;
    font-weight: bolder;
    padding: 15px 0px;
    z-index: 1;
    cursor: pointer;
  }

  button:hover {
    background-color: black;
    color: white;
    transition: all 0.5s;
  }

  hr {
    width: 100%;
    border: 0.5px solid black;
    position: absolute;
    top: 23px;
    z-index: 0;
  }
`;

export default class Galeria extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicou: false
    };
  }

  handleClick() {
    this.setState({
      clicou: !this.state.clicou
    });
  }

  render() {
    let galeria = this.props.imagens.slice(0, this.props.elementosIniciais);
    return this.state.clicou ? (
      <GaleriaGrid>
        {this.props.imagens.map((imagem, index) => (
          <LinkBox
            simples={true}
            image={imagem}
            key={index}
            altura={260}
            firstSen={"VER MAIS"}
          />
        ))}
      </GaleriaGrid>
    ) : (
      <>
        {console.log(galeria)}
        <GaleriaGrid>
          {galeria.map((imagem, index) => (
            <LinkBox
              simples={true}
              image={imagem}
              key={index}
              altura={260}
              firstSen={"VER MAIS"}
            />
          ))}
        </GaleriaGrid>
        <DivButton>
          <hr />
          <button onClick={this.handleClick}> CARREGAR MAIS </button>
        </DivButton>
      </>
    );
  }
}
