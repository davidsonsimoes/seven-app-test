import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts[0]};
    color: ${theme.colors.onyx}
  }
  body {
    background: ${theme.colors.powderWhite};
  }
`;

export const Wrapper = styled.div`
  padding: 4em;
`;
