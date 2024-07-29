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
`;