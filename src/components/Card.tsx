import React from 'react';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';

interface CardProps {}

const Card: React.FC<CardProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  width: 12rem;
  height: 12rem;
  padding: 1.5rem;
  gap: 1rem;

  background-color: ${cvar('cardBackground')};
  border: 1px solid #ebebeb;
  border-radius: 12px;

  transition: 0.3s ease;

  &:hover {
    box-shadow: 0px 118.074px 94.4595px rgba(41, 72, 152, 0.05),
      0px 76.5297px 55.32px rgba(41, 72, 152, 0.037963),
      0px 45.4805px 30.0871px rgba(41, 72, 152, 0.0303704),
      0px 23.6149px 15.3497px rgba(41, 72, 152, 0.025),
      0px 9.62088px 7.6967px rgba(41, 72, 152, 0.0196296),
      0px 2.18656px 3.71716px rgba(41, 72, 152, 0.012037);

    transition: 0.3s ease;
  }

  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export default Card;
