import React from 'react';
import { CSSVariables, cvar } from 'src/theming/cvar';
import styled from 'styled-components';

interface TextProps {
  size?: string;
  font?: keyof typeof CSSVariables;
  color?: keyof typeof CSSVariables;
  fontWeight?: number | string;
  uppercase?: boolean;
}

// PASS APPROPRIATE h TAG AS CHILDREN
const Text: React.FC<TextProps> = ({
  font = 'fontPrimary',
  size = '1.6rem',
  color = 'fontColorPrimary',
  fontWeight = 'normal',
  children,
  uppercase = false,
}) => {
  return (
    <StyledText
      uppercase={uppercase}
      font={font}
      size={size}
      color={color}
      fontWeight={fontWeight}
    >
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
  h4,
  p {
    font-family: ${(props) => cvar(props.font!)};
    font-size: ${(props) => props.size};
    color: ${(props) => cvar(props.color!)};
    font-weight: ${(props) => props.fontWeight!};
    // h tags have different default margins. Normalize it.
    margin: 0;
    ${(props) => (props.uppercase ? 'text-transform: uppercase;' : null)};
  }
`;

export default Text;
