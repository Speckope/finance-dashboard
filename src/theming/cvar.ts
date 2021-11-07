export const CSSVariables = {
  colorPrimary: '--color-primary',
  colorSecondary: '--color-secondary',

  colorBackground: '--color-background',
  colorBackgroundVariant: '--color-background-variant',
  cardBackground: '--card-background',

  fontColorPrimary: '--font-color-primary',
  fontColorSecondary: '--font-color-secondary',
  fontColorHeading: '--font-color-heading',

  fontPrimary: '--font-primary',
  fontSecondary: '--font-secondary',
};

export const cvar = (key: keyof typeof CSSVariables) =>
  `var(${CSSVariables[key]})`;
