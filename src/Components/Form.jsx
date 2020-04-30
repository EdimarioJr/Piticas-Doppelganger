import React from "react";
import styled from "styled-components";

const GridForm = styled.form`
  background-color: #f2f2f2;
  height: 1000px;
  border: 1px solid black;
  padding: 20px;
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  grid-template-areas:
    "texto texto"
    "nome nome"
    "email email"
    "celular telefone"
    "faixa faixa"
    "estado cidade"
    "interesse interesse"
    "obs obs"
    "enviar limpar";

  #texto {
    grid-area: texto;
  }

  #nome {
    grid-area: nome;
  }
  #email {
    grid-area: email;
  }
  #celular {
    grid-area: celular;
  }
  #telefone {
    grid-area: telefone;
  }
  #faixa {
    grid-area: faixa;
  }
  #estado {
    grid-area: estado;
  }
  #cidade {
    grid-area: cidade;
  }

  #interesse {
    grid-area: interesse;
  }

  #obs {
    grid-area: obs;
  }

  #enviar {
    grid-area: enviar;
  }
  #limpar {
    grid-area: limpar;
  }

  #interesse input {
    padding-top: 10px;
  }

  label {
    font-style: italic;
    font-weight: bold;
  }

  input,
  select {
    text-transform: uppercase;
    text-align: left;
    font-size: 15px;
    width: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid black;
    margin: 10px 0;
    padding: 5px;
    padding-left: 0;
    background-color: #f2f2f2;
  }

  textarea {
    display: block;
    width: 100%;
    height: 70px;
    border: 1px solid black;
  }

  hr {
    border: 0.5px solid black;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  button {
    border: 1px solid black;
    background-color: white;
    height: 40px;
    align-self: center;
    box-shadow: 2px 2px black;
    font-weight: bolder;
  }

  button:hover {
    cursor: pointer;
    background-color: #66b9f4;
    color: white;
    box-shadow: 2px 2px gray;
    transition: all 0.5s;
  }

  #limpar:hover {
    background-color: #ea8c0d;
  }
`;

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obs: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      obs: event.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      obs: ""
    });
  }

  render() {
    return (
      <GridForm>
        <p id="texto">
          O sonho de ser um empreendedor é cada vez maior, e a Piticas formatou
          sua franquia de forma que esse sonho possa ser realizado e
          administrado de forma simples, prática e lucrativa.
        </p>
        <label id="nome">
          NOME:
          <input type="text" />
        </label>
        <label id="email">
          E-MAIL:
          <input type="email" />
        </label>
        <label id="celular">
          DDD+CELULAR:
          <input type="tel" />
        </label>
        <label id="telefone">
          DDD+TELEFONE:
          <input type="tel" />
        </label>
        <label id="faixa">
          FAIXA DE CAPITAL:
          <select name="faixas">
            <option value="x<50">Até 50 mil</option>
            <option value="50<x<100">De 50 mil até 100 mil</option>
            <option value="100<x<150">De 100 mil até 150 mil</option>
            <option value="150<x<200">De 150 mil até 200 mil</option>
            <option value="x>200">Acima de 200 mil</option>
          </select>
        </label>
        <label id="estado">
          ESTADO:
          <input type="text" />
        </label>
        <label id="cidade">
          CIDADE:
          <input type="text" />
        </label>
        <label id="interesse">
          CIDADE DE INTERESSE:
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </label>
        <label id="obs">
          OBSERVAÇÕES:
          <textarea onChange={this.handleChange} value={this.state.obs} />
          <hr />
        </label>
        <button id="enviar">ENVIAR</button>
        <button id="limpar" onClick={this.handleClick}>
          LIMPAR
        </button>
      </GridForm>
    );
  }
}
