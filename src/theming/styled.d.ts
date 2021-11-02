import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
    };

    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundVariant: string;
    };

    fontColors: {
      primary: string;
      secondary: string;
    };
  }
}
