import styled from 'styled-components';

interface GutterProps {
  padding?: Spacing;
  paddingTop?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  paddingBottom?: Spacing;
}

export const Gutter = styled.div<GutterProps>`
  padding-top: ${({ theme, padding = 'none', paddingTop = padding }) => theme.spacing[paddingTop]};
  padding-left: ${({ theme, padding = 'none', paddingLeft = padding }) => theme.spacing[paddingLeft]};
  padding-right: ${({ theme, padding = 'none', paddingRight = padding }) => theme.spacing[paddingRight]};
  padding-bottom: ${({ theme, padding = 'none', paddingBottom = padding }) => theme.spacing[paddingBottom]};
`;