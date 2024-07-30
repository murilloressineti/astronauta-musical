import styled from "styled-components";

export const Container = styled.button `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  
  padding: 1rem 2.5rem;
  font-weight: 700;

  background: ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND};
  box-shadow: 0 0.4rem 0.8rem rgba(83, 162, 233, 0.5);
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 4rem;
  border: none;
  cursor: pointer;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.4rem 0.8rem rgba(83, 162, 233, 0.7);
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
