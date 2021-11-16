import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  themeName: 'lightTheme',

  colors: {
    white: '#FFFFFF',
    primary: '#544AC3',
    secondary: '#F26C6D',
    background: '#FFFFFF',
    backgroundVariant: '#F5F8FF',
    cardBackground: '#FEFEFF',
    svgColor: '#000000',
    searchColor: '#F9F9FB',
    borderColor: '#EBEBEB',
  },

  fontColors: {
    primary: '#000000',
    secondary: '#B4BAC1',
    headingColor: '#5D5D68',
  },

  fonts: {
    primary: '"Open Sans", sans-serif',
    secondary: '"Tomorrow", sans-serif',
  },
};

export const darkTheme: DefaultTheme = {
  themeName: 'darkTheme',

  colors: {
    white: '#FFFFFF',
    primary: '#544AC3',
    secondary: '#F26C6D',

    background: '#1A1A2E',
    backgroundVariant: '#202040',
    cardBackground: '#202033',

    svgColor: 'white',
    searchColor: '#1A1A2E',
    borderColor: '#F26C6D',
  },

  fontColors: {
    primary: 'white',
    secondary: '#B4BAC1',
    headingColor: 'white',
  },

  fonts: {
    primary: '"Open Sans", sans-serif',
    secondary: '"Tomorrow", sans-serif',
  },
};
