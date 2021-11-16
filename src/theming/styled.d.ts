import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    themeName: string;

    fonts: {
      primary: string;
      secondary: string;
    };

    colors: {
      white: string;
      primary: string;
      secondary: string;
      background: string;
      backgroundVariant: string;
      cardBackground: string;
      svgColor: string;
      searchColor: string;
      borderColor: string;
    };

    fontColors: {
      primary: string;
      secondary: string;
      headingColor: string;
    };
  }
}
