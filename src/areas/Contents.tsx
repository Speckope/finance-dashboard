import React from 'react';
import styled from 'styled-components';
import Text from '../components/Text';
import CardsList from 'src/components/CardsList';
import { cvar } from 'src/theming/cvar';
import SearchBar from 'src/components/SearchBar';
import RecentTransactions from 'src/components/RecentTransactions';
import LineChart from 'src/components/LineChart';

interface ContentsProps {}

const Contents: React.FC<ContentsProps> = () => {
  return (
    <ContentsWrapper>
      <ContentsTopWrapper>
        <Text size='2.5rem' fontWeight='bold' color='fontColorHeading'>
          <h2>Dashboard</h2>
        </Text>
        <SearchBar />
      </ContentsTopWrapper>
      <CardsList />
      <LineAreaWraper>
        <Text size='2.7rem' fontWeight='bold' color='fontColorHeading'>
          <h2>Your Account Status</h2>
        </Text>
        <LineChart />
      </LineAreaWraper>
      <RecentTransactions />
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  max-height: 100vh;
  // Card Circle div was going out of screen, adding extra space
  // Can't add hidden overflow on right sidebar bc Toggle would be cut
  overflow-x: hidden;
  overflow-y: visible;

  padding-left: 7rem;
  padding-right: 7rem;
  padding-top: 4rem;

  @media (max-width: 550px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  background-color: ${cvar('colorBackground')};

  // Styles for invisible scrollbar
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  // Chrome else works
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const ContentsTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding-bottom: 7.5rem;
`;

const LineAreaWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5rem;

  padding-bottom: 6rem;
`;

export default Contents;
