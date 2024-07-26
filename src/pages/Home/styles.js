import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 7.5rem auto;
  grid-template-areas:
    "header"
    "content";

  background-color: ${({ theme }) => theme.COLORS.GRADIENT_BACKGROUND};
`;

export const Content = styled.main`
  .ebook {
    width: 10rem;
  }
`;
