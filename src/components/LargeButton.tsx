import { motion } from 'framer-motion';
import React from 'react';
import { CSSVariables, cvar } from 'src/theming/cvar';
import styled from 'styled-components';

interface LargeButtonProps {
  borderRadius?: string;
  color?: keyof typeof CSSVariables;
}

const LargeButton: React.FC<LargeButtonProps> = ({
  children,
  color = 'colorPrimary',
  borderRadius = '13px',
}) => {
  return (
    <StyledLargeButton color={color} borderRadius={borderRadius}>
      {children}
    </StyledLargeButton>
  );
};

const StyledLargeButton = styled(motion.button)<LargeButtonProps>`
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

  min-height: 6.9rem;
  width: 6.6rem;
  min-width: 6.6rem;
  margin-bottom: 5rem;
  border-radius: ${(props) => props.borderRadius};

  background-color: ${(props) => cvar(props.color!)};
  box-shadow: 0rem 1.5rem 2rem rgba(98, 60, 231, 0.35);
`;

export default LargeButton;
