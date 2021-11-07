import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import CardsList from 'src/components/CardsList';
import { cvar } from 'src/theming/cvar';
import SearchBar from 'src/components/SearchBar';

interface ContentsProps {}

const Contents: React.FC<ContentsProps> = ({}) => {
  return (
    <ContentsWrapper>
      <ContentsTopWrapper>
        <Text size='2.5rem' fontWeight='bold' color='fontColorHeading'>
          <h1>Dashboard</h1>
        </Text>
        <SearchBar />
      </ContentsTopWrapper>
      <CardsList />
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 7rem;
  padding-right: 7rem;

  background-color: ${cvar('colorBackground')};
`;

const ContentsTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Contents;
