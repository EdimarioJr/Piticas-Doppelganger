import React from "react";
import styled from "styled-components";
import dino1 from "../images/DinosaurJr1.jpg";
import dino2 from "../images/DinosaurJr2.jpg";
import dino3 from "../images/DinosaurJr3.jpg";

const imagens = [dino1, dino2, dino3];

const AnimatedImg = styled.img`
  width: 100vw;
  height: 600px;
`;

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      imagemAtual: imagens[0],
      whenProp: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      let cont = this.state.contador;
      if (cont === 2) {
        this.setState({
          contador: 0,
          imagemAtual: imagens[0]
        });
      } else {
        cont++;
        this.setState({
          contador: cont,
          imagemAtual: imagens[cont]
        });
      }
    }, 4000);
  }

  render() {
    return <AnimatedImg src={this.state.imagemAtual} alt="dinosaurJr" />;
  }
}
