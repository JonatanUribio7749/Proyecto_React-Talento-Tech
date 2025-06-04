// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background: #f8f9fa;
    color: #333;
    min-height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  /* Variables CSS si se quisiera: */
  :root {
    --color-primary: #3498db;
    --color-secondary: #2ecc71;
    --gray-light: #ecf0f1;
    --gray-medium: #bdc3c7;
    --gray-dark: #7f8c8d;
  }

  /* Estilos para inputs (placeholder, focus) */
  input::placeholder {
    color: #ccc;
  }
`;

export default GlobalStyles;
