import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import CardsList from 'src/components/CardsList';
import { cvar } from 'src/theming/cvar';

interface ContentsProps {}

const Contents: React.FC<ContentsProps> = ({}) => {
  return (
    <Wrapper>
      <Text size='2.5rem' fontWeight='bold' color='fontColorHeading'>
        <h1>Dashboard</h1>
      </Text>
      <CardsList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;

  background-color: ${cvar('colorBackground')};
`;

export default Contents;
