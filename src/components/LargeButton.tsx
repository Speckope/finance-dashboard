import React from 'react';
import { CSSVariables, cvar } from 'src/theming/cvar';
import styled from 'styled-components';

interface LargeButtonProps {
  borderRadius?: string;
  color?: keyof typeof CSSVariables;
  clickable?: boolean;
}

const LargeButton: React.FC<LargeButtonProps> = ({
  children,
  color = 'colorPrimary',
  borderRadius = '13px',
  clickable = false,
}) => {
  return (
    <StyledLargeButton
      clickable={clickable}
      color={color}
      borderRadius={borderRadius}
    >
      {children}
    </StyledLargeButton>
  );
};

const StyledLargeButton = styled.button<LargeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  &,
  &:link,
  &:visited {
    text-decoration: none;
    border: none;
    cursor: pointer;
  }

  // Don't let it be too smal, but nice.
  min-height: 6.9rem;
  min-width: 6.6rem;

  border-radius: ${(props) => props.borderRadius};

  background-color: ${(props) => cvar(props.color!)};

  // Remove shadow when dark theme, it looks horrible with it.
  box-shadow: ${(props) =>
    props.theme.themeName === 'lightTheme'
      ? `0rem 1.5rem 2rem rgba(98, 60, 231, 0.35)`
      : ''};

  transition: 0.3s ease;

  // Add effects when clickable
  ${(props) =>
    props.clickable
      ? `
      &:hover {
        scale: 1.1;
        -webkit-transform: scale(1.1);
        
        transition: 0.3s ease;
      }

      &:active {
        scale: 0.9;
        -webkit-transform: scale(0.9);
      
        background-color: ${cvar('colorSecondary')};
        transition: 0.1s ease;
      }
  `
      : ''}
`;

export default LargeButton;
