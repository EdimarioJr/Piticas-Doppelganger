import React from "react";
import styled from "styled-components";

const FocusedBox = styled.div`
  border: 1px solid black;
  height: ${props => props.altura}px;
  position: relative;
  background-image: url(${props => props.image});
  color: white;
  background-size: cover;
  cursor: pointer;
  h1 {
    border: 1px solid black;
    font-size: 12px;
    background-color: blueviolet;
    padding: 10px;
    position: absolute;
    bottom: -5px;
    left: 45%;
  }
`;

const OpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-style: ${props => (props.fonte ? "italic" : "normal")};
  opacity: ${props => (props.primary ? 1 : 0)};
  transition: opacity 0.5s linear;
  background-color: ${props => props.secondary};
  width: 100%;
  height: 100%;
  color: white;
  font-size: 20px;
  font-weight: bolder;

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid greenyellow;
    width: 40px;
  }
`;

export default class LinkBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foco: false
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus(e) {
    e.stopPropagation();
    this.setState({
      foco: true
    });
  }

  handleBlur(e) {
    e.stopPropagation();
    this.setState({
      foco: false
    });
  }

  render() {
    return this.props.simples ? (
      <>
        <FocusedBox
          onMouseEnter={this.handleFocus}
          onMouseLeave={this.handleBlur}
          image={this.props.image}
          altura={this.props.altura}
        >
          <OpBox
            primary={this.state.foco}
            secondary="rgba(22, 67, 124, 0.45)"
            fonte={true}
          >
            <h3>{this.props.firstSen}</h3>
          </OpBox>
        </FocusedBox>
      </>
    ) : (
      <>
        <FocusedBox
          onMouseEnter={this.handleFocus}
          onMouseLeave={this.handleBlur}
          image={this.props.image}
          altura={this.props.altura}
        >
          <OpBox
            primary={this.state.foco}
            fonte={false}
            secondary="rgba(153, 51, 153, 0.45)"
          >
            <h2>{this.props.firstSen}</h2>
            <h2>{this.props.secondSen}</h2>
            <hr />
            <h2>Ver mais</h2>
          </OpBox>
          <h1>
            {this.props.firstSen} {this.props.secondSen}
          </h1>
        </FocusedBox>
      </>
    );
  }
}
