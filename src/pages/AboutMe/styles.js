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

  background-color: ${({ theme }) => theme.COLORS.GRADIENT_BACKGROUND};
`;

export const Content = styled.main`
  grid-area: content;
  padding: 2rem;
  padding-bottom: 6rem;
  background: ${({ theme }) => theme.COLORS.GRADIENT_BACKGROUND};

  section {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 5rem 0;

    img {
      width: 80%;
      height: auto;
      border-radius: 2rem;
      box-shadow: 0 .4rem .8rem rgba(0, 0, 0, 0.2);
    }
  }

  h1 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  p {
    color: ${({ theme }) => theme.COLORS.BLACK};
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  blockquote {
    margin: 3rem 0;
    padding-left: 2rem;
    border-left: .4rem solid ${({ theme }) => theme.COLORS.BLUE};

    p {
      font-style: italic;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.GRAY_70};
    }

    cite {
      font-size: 1.6rem;
      font-weight: bold;
      text-align: right;
      color: ${({ theme }) => theme.COLORS.GRAY_70};
      margin-top: 1rem;
    }
  }

  button {
    margin-top: 2rem;
  }

  @media (min-width: 769px) {
    padding: 0 10rem 10rem;

    section {
      margin-top: 10rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
      gap: 10rem;
    }

    .text-content {
      flex: 3;
      margin-right: 2rem;
    }

    .image {
      flex: 2;
      margin: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`
