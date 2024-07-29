import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 7.5rem auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.main`
  grid-area: content;
  padding: 2rem;
  padding-bottom: 6rem;
  background: ${({ theme }) => theme.COLORS.GRADIENT_BACKGROUND};

  .ebook {
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

  p {
    margin-bottom: 5rem;
  }

`;
