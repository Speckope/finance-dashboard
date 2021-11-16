import { createGlobalStyle } from 'styled-components';
import { cvar } from './cvar';
import { fonts } from './fonts';

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
    ${fonts}

    // Can't but variables from CSSVariables as property name
    // bc of a ts-styled-plugin bug.
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-secondary: ${(props) => props.theme.colors.secondary};

    --color--white: ${(props) => props.theme.colors.white};
    --color-background: ${(props) => props.theme.colors.background};
    --color-background-variant: ${(props) =>
      props.theme.colors.backgroundVariant};
    --card-background: ${(props) => props.theme.colors.cardBackground};

    --svg-color: ${(props) => props.theme.colors.svgColor};

    --search-color: ${(props) => props.theme.colors.searchColor};

    --border-color: ${(props) => props.theme.colors.borderColor};

    --font-color-primary: ${(props) => props.theme.fontColors.primary};
    --font-color-secondary: ${(props) => props.theme.fontColors.secondary};
    --font-color-heading: ${(props) => props.theme.fontColors.headingColor};

    --font-primary: ${(props) => props.theme.fonts.primary};
    --font-secondary: ${(props) => props.theme.fonts.secondary};

    // For Toggle
    --color-toggle-light: ${(props) => props.theme.colors.white};
    --color-toggle-dark: ${(props) => props.theme.colors.primary};

    // hsl color-secondary, shadow generated from https://www.joshwcomeau.com/shadow-palette/
    --shadow-color: 360deg 84% 69%;
    --shadow-elevation-high: 0px 1px 0.8px hsl(var(--shadow-color) / 0.15),
      0px 1.1px 0.8px -0.6px hsl(var(--shadow-color) / 0.13),
      0px 2px 1.5px -1.1px hsl(var(--shadow-color) / 0.12),
      0px 4.4px 3.3px -1.7px hsl(var(--shadow-color) / 0.1),
      -0.1px 9px 6.8px -2.2px hsl(var(--shadow-color) / 0.09),
      -0.1px 16.6px 12.5px -2.8px hsl(var(--shadow-color) / 0.07),
      -0.2px 28px 21px -3.3px hsl(var(--shadow-color) / 0.06),
      -0.3px 43.8px 32.9px -3.9px hsl(var(--shadow-color) / 0.04),
      -0.5px 64.9px 48.7px -4.4px hsl(var(--shadow-color) / 0.03),
      -0.7px 92px 69px -5px hsl(var(--shadow-color) / 0.01);

    font-size: 62.5%;

    // tab-landscape
    @media (max-width: 1250px) {
      font-size: 56.5%;
    }

    // tab-vertica
    @media (max-width: 900px) {
      font-size: 50%;
    }

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
