import React from 'react';
import styled from 'styled-components';
import SmallButton from './SmallButton';
import { ReactComponent as MinusSVG } from '../assets/contents/minus-icon.svg';
import { ReactComponent as PlusSVG } from '../assets/contents/plus-icon.svg';
import Text from './Text';
import { Transaction } from 'src/data/transactionsData';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  // Render correct svg for SmallButton
  let svg;
  if (transaction.type === 'expense') {
    svg = <MinusSVG />;
  } else if (transaction.type === 'income') {
    svg = <PlusSVG />;
  } else {
    svg = <PlusSVG className='transfer-svg' />;
  }

  return (
    <Wrapper>
      <SmallButton>{svg}</SmallButton>
      <TextWrapper>
        <Text size='1.7rem'>
          <h4>{transaction.title}</h4>
        </Text>
        <Text size='1.5rem' color='fontColorHeading'>
          <p>{transaction.description}</p>
        </Text>
      </TextWrapper>
      <PriceWrapper>
        <Text font='fontSecondary' size='2rem'>
          <p>{transaction.value}</p>
        </Text>
      </PriceWrapper>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  // Other color for transfer svg
  .transfer-svg {
    path {
      fill: #24cca7;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space;
  padding-left: 2rem;
`;

const PriceWrapper = styled.div`
  margin-left: auto;
`;

export default TransactionItem;
