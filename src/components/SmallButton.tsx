import React from 'react';
import { arrowDown } from 'src/theming/animations/arrowDown';
import { border } from 'src/theming/animations/border';
import { cvar } from 'src/theming/cvar';
import styled, { css } from 'styled-components';
import { Wrapper as TransactionItemWrapper } from './TransactionItem';

interface SmallButtonProps {
  clickable?: boolean;
}

const SmallButton: React.FC<SmallButtonProps> = ({
  children,
  clickable = false,
}) => {
  return (
    <StyledSmallButton clickable={clickable}>{children}</StyledSmallButton>
  );
};

// Helper for complex mixins in Styled, else it won't compile.
const animationMixin = css<SmallButtonProps>`
  animation: ${border} 1s forwards;
`;

const StyledSmallButton = styled.div<SmallButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4.3rem;
  width: 4.3rem;
  border-radius: 1.1rem;

  background-color: ${cvar('cardBackground')};
  box-shadow: 0px 108.006px 86.4048px rgba(41, 72, 152, 0.05),
    0px 70.0039px 50.6028px rgba(41, 72, 152, 0.037963),
    0px 41.6023px 27.5215px rgba(41, 72, 152, 0.0303704),
    0px 21.6012px 14.0408px rgba(41, 72, 152, 0.025),
    0px 8.80049px 7.04039px rgba(41, 72, 152, 0.0196296),
    0px 2.00011px 3.40019px rgba(41, 72, 152, 0.012037);

  // Hover animations
  &:hover {
    // For downlaod svg
    .download-arrow {
      animation: ${arrowDown} 1s infinite;
    }
    // Clickable animation
    ${(props) => (props.clickable ? animationMixin : '')}
  }

  svg {
    height: 1.7rem;
    width: 1.9rem;
  }

  // It will change it's size when inside TransactionItem
  ${TransactionItemWrapper} & {
    width: 5.6rem;
    height: 5.6rem;
  }
`;

export default SmallButton;
