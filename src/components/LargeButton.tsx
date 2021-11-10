import { motion } from 'framer-motion';
import React from 'react';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';

interface LargeButtonProps {}

const LargeButton: React.FC<LargeButtonProps> = ({ children }) => {
  return <StyledLargeButton>{children}</StyledLargeButton>;
};

const StyledLargeButton = styled(motion.button)`
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
  margin-bottom: 5rem;
  border-radius: 0rem 1.5rem 1.5rem 1.5rem;

  background-color: ${cvar('colorPrimary')};
  box-shadow: 0rem 1.5rem 2rem rgba(98, 60, 231, 0.35);
`;

export default LargeButton;
