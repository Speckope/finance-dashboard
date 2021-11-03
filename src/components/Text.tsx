import React from 'react';
import { CSSVariables, cvar } from 'src/theming/cvar';
import styled from 'styled-components';

interface TextProps {
  size?: string;
  font?: keyof typeof CSSVariables;
  color?: string;
}

const Text: React.FC<TextProps> = ({
  font = 'fontPrimary',
  size = '8rem',
  color = 'black',
  // As children, pass appropriate <h> tag and text
  children,
}) => {
  return (
    <StyledText font={font} size={size} color={color}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.div<TextProps>`
  // This way we can get the semantic html meaning
  // With control over size in one reusable component
  h1,
  h2,
  h3,
  h4 {
    font: ${(props) => cvar(props.font!)};
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
  }
`;

export default Text;
