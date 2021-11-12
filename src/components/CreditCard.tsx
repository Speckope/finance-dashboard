import React from 'react';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';

interface CreditCardProps {}

const CreditCard: React.FC<CreditCardProps> = ({}) => {
  return <Wrapper>CARD</Wrapper>;
};

export default CreditCard;

const Wrapper = styled.div`
  position: relative;

  width: 35rem;
  height: 22rem;

  border-radius: 1.4rem;

  background-color: ${cvar('colorPrimary')};

  // pseudo shadow behind
  &:after {
    position: absolute;

    width: 34rem;
    height: 22rem;

    top: 1rem;
    left: 0.5rem;

    content: '';
    opacity: 0.2;

    border-radius: 1.4rem;

    background: ${cvar('colorPrimary')};
  }

  // Inner circle
  &:before {
    position: absolute;

    width: 22rem;
    height: 22rem;

    left: 20rem;
    top: -6rem;

    opacity: 0.1;
    content: '';

    border-radius: 50%;

    background: ${cvar('colorBackground')};
  }
`;
