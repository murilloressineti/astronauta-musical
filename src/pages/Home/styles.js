import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.GRADIENT_BACKGROUND};

  display: grid;
  grid-template-rows: 7.5rem auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.main`
  grid-area: content;
  padding: 2rem 2rem;
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
    margin-bottom: 5.5rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 769px) {
    padding: 0 10rem 10rem;

    .ebook {
      img {
        height: 58rem;
      }
    }

    h1 {
      font-size: 5.6rem;
    }

    p {
      font-size: 2rem;
    }

    .buttons {
      flex-direction: column;
      gap: 17rem;
    }
  }
`;
