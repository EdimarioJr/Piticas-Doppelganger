import React from "react";
import styled from "styled-components";
import midia from "../images/banner-midia.jpg";
import quemSomos from "../images/banner-quem-somos.jpg";

const Midia = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  width: 100%;
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin: 50px 0;

  #teste {
    margin-right: 30px;
  }
`;

export default function About(props) {
  return (
    <Wrapper>
      <Midia id="teste" bg={midia} />
      <Midia bg={quemSomos} />
    </Wrapper>
  );
}
