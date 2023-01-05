import styled, { DefaultTheme } from 'styled-components';

interface TextBoxProps {
  textAlign?: AlignSetting;
}

export const TextBox = styled.div<TextBoxProps>`
  text-align: ${({ textAlign = 'left' }) => textAlign};
`;