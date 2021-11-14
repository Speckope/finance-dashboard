import React from 'react';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';
import Text, { StyledText } from './Text';
import { ReactComponent as StarSVG } from '../assets/right-sidebar/star-icon.svg';
import { ReactComponent as VisaSVG } from '../assets/right-sidebar/visa-logo.svg';

interface CreditCardProps {}

const CreditCard: React.FC<CreditCardProps> = ({}) => {
  return (
    <Wrapper>
      <Circle />
      {/* TOP */}
      <TopWrapper>
        <StarSVG />
        <Text color='colorBackground' fontWeight='bold'>
          <h4> Platinum </h4>
        </Text>
        <Text color='colorBackground' fontWeight='bold'>
          <h4>Debit</h4>
        </Text>
      </TopWrapper>
      {/* MIDDLE */}
      <Text
        color='colorBackground'
        fontWeight='600'
        size='2rem'
        font='fontSecondary'
        letterSpacing='0.4px'
      >
        <h3>4132 0724 **37 48**</h3>
      </Text>
      {/* // BOTTOM */}
      <BottomWrapper>
        <BottomLeftWrapper>
          <Text size='1.1rem' color='fontColorSecondary' fontWeight='bold'>
            <h4>Expiry date</h4>
          </Text>
          <Text
            size='1.3rem'
            color='colorBackground'
            font='fontSecondary'
            fontWeight='500'
          >
            <p>05/25</p>
          </Text>
        </BottomLeftWrapper>
        <BottomLeftWrapper>
          <Text size='1.1rem' color='fontColorSecondary' fontWeight='bold'>
            <h4>CVV</h4>
          </Text>
          <Text
            size='1.3rem'
            color='colorBackground'
            font='fontSecondary'
            fontWeight='500'
          >
            <p>472</p>
          </Text>
        </BottomLeftWrapper>
        <VisaSVG style={{ marginLeft: 'auto' }} />
      </BottomWrapper>
    </Wrapper>
  );
};

export default CreditCard;

const Wrapper = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 35rem;
  min-height: 22rem;
  padding: 2rem;

  border-radius: 1.4rem;

  background-color: ${cvar('colorPrimary')};

  // pseudo shadow behind
  &:after {
    position: absolute;
    // Should be below the parent element
    z-index: -1;

    width: 34rem;
    height: 22rem;

    top: 1rem;
    left: 0.5rem;

    content: '';
    opacity: 0.2;

    border-radius: 1.4rem;

    background: ${cvar('colorPrimary')};
  }
`;

// Inner circle (full white)
const Circle = styled.div`
  position: absolute;

  width: 22rem;
  height: 22rem;

  left: 20rem;
  top: -6rem;

  opacity: 0.1;
  content: '';

  border-radius: 50%;

  background: ${cvar('colorBackground')};

  // Outer circle (only border)
  &:before {
    position: absolute;

    width: 29rem;
    height: 29rem;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    content: '';

    // Opacity 0.1 is applied from the parent component (circle)
    border: 1px solid ${cvar('colorBackground')};
    border-radius: 50%;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  // Platinum text
  ${StyledText}:first-of-type {
    margin-left: 1rem;
  }
  // Debit text
  ${StyledText}:last-of-type {
    margin-left: auto;
    align-self: flex-start;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const BottomLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
