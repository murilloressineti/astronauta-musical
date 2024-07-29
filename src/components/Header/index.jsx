import React from 'react'; 
import { Container } from "./styles";
import logo from "../../assets/logo.png";

export function Header() {
  return(
    <Container>
      <img src={logo} alt="" className="logo" />

        Menu
    </Container>
  )
}