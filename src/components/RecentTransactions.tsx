import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { ReactComponent as DownloadSVG } from '../assets/contents/download-icon.svg';
import SmallButton from './SmallButton';
import TransactionList from './TransactionList';

interface RecentTransactionsProps {}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({}) => {
  return (
    <Wrapper>
      <TopAreaWrapper>
        <Text color='fontColorHeading' fontWeight='bold' size='2.7rem'>
          <h2>Recent Transactions</h2>
        </Text>
        <SmallButton clickable>
          <DownloadSVG />
        </SmallButton>
      </TopAreaWrapper>
      <TransactionList />
    </Wrapper>
  );
};

export default RecentTransactions;

const Wrapper = styled.div``;

const TopAreaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5rem;
`;
