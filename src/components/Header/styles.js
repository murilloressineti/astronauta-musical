import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 7.5rem;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.5);
  position: static;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  .logo {
    width: 5rem;
  }

  button {
    padding: 0.5rem 1rem;
    font-weight: 600;

    background: ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 4rem;
    border: none;
    cursor: pointer;

    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0.4rem 0.8rem rgba(83, 162, 233, 0.7);
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 3.6rem;
  height: 1.8rem;
  cursor: pointer;

  span {
    display: block;
    height: 0.3rem;
    background: ${({ theme }) => theme.COLORS.BLUE};
    border-radius: 0.25rem;

    &:nth-child(1) {
      width: 100%;
    }
    &:nth-child(2) {
      width: 80%;
    }
    &:nth-child(3) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.nav`
  position: absolute;
  top: 7.5rem;
  right: 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  z-index: 1000;

  a {
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 0.6rem 0;
    width: 100%;
    text-align: left;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.COLORS.BLUE};
      text-decoration: underline;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DesktopMenu = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.BLACK};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.COLORS.BLUE};
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;