import styled from 'styled-components';

interface TypographyProps {
  color?: Colors;
  fontSize?: FontSizes;
  fontWeight?: FontWeight;
}

export const Typography = styled.span<TypographyProps>`
  font-weight: ${({ fontWeight = 'normal' }) => fontWeight};
  color: ${({ theme, color = 'darkPure' }) => theme.colors[color]};
  font-size: ${({ theme, fontSize = 'text' }) => theme.font.sizes[fontSize]};
`;