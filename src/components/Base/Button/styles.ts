import styled from 'styled-components';

interface ButtonProps {
  textColor: Colors; 
  backgroundColor: Colors;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-color: none;
  padding: ${({ theme }) => theme.spacing.sm };
  border-radius: ${({ theme }) => theme.border.radius.round};
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
`;