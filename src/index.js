import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Fidelidade from "../src/Pages/Fidelidade";
import Homepage from "../src/Pages/Homepage";
import Franquia from "../src/Pages/Franquia";
import Lojas from "../src/Pages/Lojas";
import NaMidia from "../src/Pages/NaMidia";
import PitiFas from "../src/Pages/PitiFas";
import QuemSomos from "../src/Pages/QuemSomos";
import Shop from "../src/Pages/Shop";

import background from "../src/images/bg-white.png";

const GlobalStyle = createGlobalStyle`
  html,*{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    height: 100vh;
    background-image: url(${background});
    background-repeat: repeat;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/fidelidade" component={Fidelidade} />
      <Route path="/franquia" component={Franquia} />
      <Route path="/lojas" component={Lojas} />
      <Route path="/naMidia" component={NaMidia} />
      <Route path="/pitiFas" component={PitiFas} />
      <Route path="/quemSomos" component={QuemSomos} />
      <Route path="/shop" component={Shop} />
    </Switch>
  </BrowserRouter>,
  rootElement
);
