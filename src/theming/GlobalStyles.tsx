import { createGlobalStyle } from 'styled-components';
import { cvar } from './cvar';

// Workaround for code formatting(doesn't work for createGlobalStyles alone)
const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    // Can't but variables from CSSVariables as property name
    // bc of a ts-styled-plugin bug.
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-secondary: ${(props) => props.theme.colors.secondary};

    --color-background: ${(props) => props.theme.colors.background};
    --color-background-variant: ${(props) =>
      props.theme.colors.backgroundVariant};
    --card-background: ${(props) => props.theme.colors.cardBackground};

    --font-color-primary: ${(props) => props.theme.fontColors.primary};
    --font-color-secondary: ${(props) => props.theme.fontColors.secondary};
    --font-color-heading: ${(props) => props.theme.fontColors.headingColor};

    --font-primary: ${(props) => props.theme.fonts.primary};
    --font-secondary: ${(props) => props.theme.fonts.secondary};

    font-size: 62.5%;
    box-sizing: border-box;
    scroll-behavior: smooth;

    font-family: ${cvar('fontPrimary')};
  }

  body {
    font-size: 1.6rem;
    line-height: 1.6;
  }

  body,
  #root,
  .App {
    min-height: 100vh;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  img,
  picture,
  video {
    max-width: 100%;
    display: block;
  }
`;
