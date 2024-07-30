import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 1.8rem;

  button {
    border: none;
    cursor: pointer;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .instagram,
  .tiktok {
    width: 3.8rem;
    height: 3.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    box-shadow: 0 0.4rem 0.8rem rgba(83, 162, 233, 0.5);

    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.4rem 0.8rem rgba(83, 162, 233, 0.7);
  }
  }
`;
