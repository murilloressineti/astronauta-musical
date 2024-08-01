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

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ebook {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;

    img {
      width: 100%;
      height: auto;
    }
  }

  .text-content {
    text-align: left;
  }

  .intro-container {
    width: 100%;
    max-width: 60rem;
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
    padding: 0 10rem;

    section {
      margin-top: 5rem;
      flex-direction: row;
      justify-content: space-between;
      flex-direction: row-reverse;
      align-items: center;
    }

    .ebook {
      flex: 1;
      justify-content: flex-end;
    }

    .text-content {
      flex: 1;
    }

    h1 {
      font-size: 5.6rem;
    }

    p {
      font-size: 2rem;
    }

    .buttons {
      flex-direction: column;
      max-width: 18rem;
    }

    .hidden {
      visibility: hidden;
      overflow: hidden;
    }
  }
`;

export const Footer = styled.footer`
  display: none;

  @media (min-width: 769px) {
    background: ${({ theme }) => theme.COLORS.GRADIENT_BACKGROUND};
    display: flex;
    padding: 0 10rem 5rem;
  }
`;
