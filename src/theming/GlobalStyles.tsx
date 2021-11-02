import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

     html {
         --color-primary: ${(props) => props.theme.colors.primary};
         --color-secondary: ${(props) => props.theme.colors.secondary};
         --color-background: ${(props) => props.theme.colors.background};
         --color-background-variant: ${(props) =>
           props.theme.colors.backgroundVariant};

        
        --font-color-primary: ${(props) => props.theme.fontColors.primary};
        --font-color-secondary: ${(props) => props.theme.fontColors.secondary};

        --font-primary: ${(props) => props.theme.fonts.primary};
        --font-secondary: ${(props) => props.theme.fonts.secondary};

     }
`;
