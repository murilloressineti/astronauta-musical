import React, { useState } from 'react'; 
import { Container, MenuIcon, Menu, DesktopMenu } from "./styles";
import logo from "../../assets/logo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <Container>
      <img src={logo} alt="Logo" className="logo" />
      <DesktopMenu>
        <a href="#home">Home</a>
        <a href="#about">Sobre mim</a>
        <a href=""><button>Download</button></a>
      </DesktopMenu>
      <MenuIcon onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </MenuIcon>
      {isOpen && (
        <Menu>
          <a href="#home">Home</a>
          <a href="#about">Sobre mim</a>
          <a href=""><button>Download</button></a>
        </Menu>
      )}
    </Container>
  )
}
