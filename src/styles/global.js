import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: "Montserrat", sans-serif;
  }

  h1 {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_70};
  }

  span {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

`;
