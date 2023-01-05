import { Gutter } from 'components/Base/Gutter/styles';
import styled from 'styled-components';

interface CardImageProps {
  url: string
}

export const CardImage = styled.div<CardImageProps>`
  width: 100%;
  min-height: 200px;
  background-size: cover;
  background-image: ${({ url }) => `url(${url})`};
`;

export const CardContainer = styled(Gutter)`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.darkUp };
  border-radius: ${({ theme }) => theme.border.radius.shaped};
`