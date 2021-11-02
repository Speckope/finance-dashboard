const CSSVariables = {
  colorPrimary: '--color-primary',
  colorSecondary: '--color-secondary',
  colorBackground: '--color-background',
  colorBackgroundVariant: '--color-background-variant',

  fontColorPrimary: '--font-color-primary',
  fontColorSecondary: '--font-color-secondary',

  fontPrimary: '--font-primary',
  fontSecondary: '--font-secondary',
};

export const cvar = (key: keyof typeof CSSVariables) =>
  `--var(${CSSVariables[key]})`;
