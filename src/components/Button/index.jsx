import React from 'react'; 
import { Container } from "./styles";

import sendIcon from "../../assets/send-icon.svg";

export function Button() {
  return (
    <Container>
      Download
      <img src={sendIcon} alt="" />
    </Container>
  );
}