import React from "react";
import { Container } from "./styles";

import sendIcon from "../../assets/send-icon.svg";

export function Button() {
  return (
    <Container>
      <a href="https://go.hotmart.com/F74338381E?dp=1" target="blank">
        Comprar
      </a>
      <img src={sendIcon} alt="" />
    </Container>
  );
}
