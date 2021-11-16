import styled from 'styled-components';
import { theme } from '../../skin/theme';

export const Title = styled.h1`
  color: ${theme.colors.persianGreen};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const BoxHeader = styled.div`
  padding-bottom: 10px;
`;

export const TitleFilter = styled.p`
  display: block;
  text-align: right;
  text-transform: uppercase;
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.persianGreen};
  padding: 12px 0 0 0;
`;
