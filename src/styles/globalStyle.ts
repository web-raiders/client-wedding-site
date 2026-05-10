import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Great+Vibes&family=Inter:wght@300;400;500;600&display=swap');

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background:
      radial-gradient(1200px 600px at 50% 10%, rgba(246, 239, 230, 0.6), transparent 70%),
      linear-gradient(180deg, rgba(251, 248, 243, 0.4) 0%, rgba(246, 239, 230, 0.2) 100%),
      ${({ theme }) => theme.cream};
    background-attachment: fixed, fixed, fixed;
    color: ${({ theme }) => theme.ink};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 17px;
    line-height: 1.65;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: 400;
    color: ${({ theme }) => theme.ink};
    margin: 0;
    letter-spacing: -0.01em;
  }

  p { margin: 0; }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  ::selection {
    background: ${({ theme }) => theme.clay};
    color: ${({ theme }) => theme.white};
  }
`;

export default GlobalStyle;
