import { createGlobalStyle } from 'styled-components';

const GlobalStyle: React.FC = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
  }
`;

export default GlobalStyle;
