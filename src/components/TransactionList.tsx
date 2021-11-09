import React from 'react';
import { Transaction, transactionsData } from 'src/data/transactionsData';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';
import Text from './Text';
import TransactionItem from './TransactionItem';

const formatDate = (date: Date) => {
  const dateArray = date.toDateString().split(' ');
  return `${dateArray[2]} ${dateArray[1]}, ${dateArray[3]}`;
};

const todayDate = new Date();
const yesterdayDate = new Date(todayDate);

interface TransactionListProps {}

const TransactionList: React.FC<TransactionListProps> = ({}) => {
  const today: Transaction[] = [];
  const yesterday: Transaction[] = [];

  transactionsData.forEach((transaction, i) => {
    // Push items into today if it was today
    if (
      transaction.date.getDate() === todayDate.getDate() &&
      transaction.date.getMonth() === todayDate.getMonth() &&
      transaction.date.getFullYear() === todayDate.getFullYear()
    ) {
      today.push(transaction);
    } else if (
      // Push transaction into yesterday if it was yesterday
      transaction.date.getDate() === yesterdayDate.getDate() &&
      transaction.date.getMonth() === yesterdayDate.getMonth() &&
      transaction.date.getFullYear() === yesterdayDate.getFullYear()
    ) {
      yesterday.push(transaction);
    } else {
      return;
    }
  });

  const renderDay = (date: Date, dayArr: Transaction[]) => {
    if (dayArr) {
      return (
        <DayWrapper>
          <LineDateWrapper>
            <Text uppercase color='fontColorSecondary'>
              <h4> TODAY|{formatDate(date)} </h4>
            </Text>
            <Line />
          </LineDateWrapper>
          <TransactionsWrapper>
            {today.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </TransactionsWrapper>
        </DayWrapper>
      );
    } else {
      return null;
    }
  };

  return (
    <Wrapper>
      {renderDay(todayDate, today)}
      {renderDay(yesterdayDate, yesterday)}
    </Wrapper>
  );
};

export default TransactionList;

// TODO Abstract Wrapper into one with props gap and
// padding props, if changes individually won't be needed
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-bottom: 5rem;
`;

const TransactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.5rem;
`;

const LineDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Line = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${cvar('borderColor')};
`;
