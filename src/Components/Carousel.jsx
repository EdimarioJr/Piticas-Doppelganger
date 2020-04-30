import React from "react";
import styled from "styled-components";
import direita from "../images/seta-direita.png";
import esquerda from "../images/seta-esquerda.png";

const WrapperCarousel = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin: 30px 0;
`;

const Status = styled.div`
  width: 25px;
  height: 2px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${props => (props.primary ? `black` : `gray`)};
`;

const Next = styled.button`
  position: absolute;
  ${props => (props.esquerda ? `left: -20px` : `right: -20px`)};
  top: 45%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  padding: 10px;

  &:hover {
    background-color: #1134a6;
    transition: all 0.3s;
    cursor: pointer;
  }

  img {
    width: 100%;
  }
`;

const CarouselPiticas = styled.div`
  position: relative;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0;
`;

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showedCards: [],
      inicial: 0,
      final: 3,
      status: true
    };
    this.handleRight = this.handleRight.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
  }

  componentDidMount() {
    const parteCards = this.props.cards.slice(
      this.state.inicial,
      this.state.final + 1
    );
    console.log(parteCards);
    this.setState({
      showedCards: parteCards
    });
  }

  handleRight() {
    console.log("entrou");
    console.log(this.props.cards.length);
    let maximo = this.props.cards.length - 1;
    let status = this.state.status;

    let parteCards = [];
    let init = this.state.inicial + 1;
    let finit = this.state.final + 1;
    if (finit > maximo) {
      finit = 0;
      status = false;
    }
    if (init > maximo) {
      init = 0;
      status = true;
    }
    for (let i = init; i !== finit + 1; i++) {
      if (i > maximo) i = 0;
      parteCards.push(this.props.cards[i]);
    }
    this.setState({
      showedCards: parteCards,
      inicial: init,
      final: finit,
      status: status
    });
  }

  handleLeft() {
    console.log("entrou");
    console.log(this.props.cards.length);
    let maximo = this.props.cards.length - 1;
    let status = this.state.status;
    let parteCards = [];
    let init = this.state.inicial - 1;
    let finit = this.state.final - 1;
    if (finit < 0) {
      finit = maximo;
      status = true;
    }
    if (init < 0) {
      init = maximo;
      status = false;
    }

    for (let i = init; i !== finit + 1; i++) {
      if (i > maximo) i = 0;
      parteCards.push(this.props.cards[i]);
    }
    this.setState({
      showedCards: parteCards,
      inicial: init,
      final: finit,
      status: status
    });
  }

  render() {
    let status;
    if (this.state.status === true)
      status = (
        <WrapperCarousel>
          <Status primary />
          <Status />
        </WrapperCarousel>
      );
    else
      status = (
        <WrapperCarousel>
          <Status />
          <Status primary />
        </WrapperCarousel>
      );
    return (
      <>
        <CarouselPiticas>
          {this.state.showedCards}
          <Next esquerda={false} onClick={this.handleRight}>
            <img src={direita} alt="direita" />
          </Next>
          <Next esquerda={true} onClick={this.handleLeft}>
            <img src={esquerda} alt="esquerda" />
          </Next>
        </CarouselPiticas>
        {status}
      </>
    );
  }
}
