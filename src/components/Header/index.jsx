import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, MenuIcon, Menu, DesktopMenu } from './styles';
import logo from '../../assets/logo.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
      <DesktopMenu>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/sobre-mim" className={location.pathname === '/sobre-mim' ? 'active' : ''}>Sobre mim</Link>
        <a href="https://go.hotmart.com/F74338381E?dp=1" target='blank'><button>Comprar</button></a>
      </DesktopMenu>
      <MenuIcon onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </MenuIcon>
      {isOpen && (
        <Menu>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/sobre-mim" className={location.pathname === '/sobre-mim' ? 'active' : ''}>Sobre mim</Link>
          <a href="https://go.hotmart.com/F74338381E?dp=1" target='blank'><button>Comprar</button></a>
        </Menu>
      )}
    </Container>
  );
}
