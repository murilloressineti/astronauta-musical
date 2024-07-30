import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.GRADIENT_BACKGROUND};

  display: grid;
  grid-template-rows: 7.5rem auto;
  grid-template-areas:
    "header"
    "content";

  background-color: ${({ theme }) => theme.COLORS.GRADIENT_BACKGROUND};
`;

export const Content = styled.main`
  grid-area: content;
  padding: 2rem 2rem;
  padding-bottom: 6rem;
  background: ${({ theme }) => theme.COLORS.GRADIENT_BACKGROUND};

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 5rem;
    margin-bottom: 5rem;

    img {
      height: 40rem;
      width: auto;
    }
  }

  h1 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  p {
    margin-bottom: 5.5rem;
  }

  @media (min-width: 769px) {
    padding: 0 10rem 10rem;
  }
`;
