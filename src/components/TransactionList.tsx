import React, { useEffect, useState } from 'react';
import { Transaction, transactionsData } from 'src/data/transactionsData';
import { cvar } from 'src/theming/cvar';
import { formatDateDMY } from 'src/utils/formatDate';
import styled from 'styled-components';
import Text from './Text';
import TransactionItem from './TransactionItem';

// Get dates, so we know what day is today
const todayDate = new Date();
const yesterdayDate = new Date(todayDate);
yesterdayDate.setDate(yesterdayDate.getDate() - 1);

interface TransactionListProps {}

const TransactionList: React.FC<TransactionListProps> = () => {
  const [today, setToday] = useState<Transaction[]>([]);
  const [yesterday, setYesterday] = useState<Transaction[]>([]);

  useEffect(() => {
    // Create temporary arrays that in which transaction will be pushed
    const today: Transaction[] = [];
    const yesterday: Transaction[] = [];

    transactionsData.forEach((transaction) => {
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

    // Update state after a loop to limit component rerender
    setToday(today);
    setYesterday(yesterday);
  }, []);

  const renderDay = (date: Date, dayArr: Transaction[], day: string) => {
    if (dayArr) {
      return (
        <DayWrapper>
          <LineDateWrapper>
            <Text uppercase color='fontColorSecondary'>
              <h4>
                {day}|{formatDateDMY(date)}
              </h4>
            </Text>
            <Line />
          </LineDateWrapper>
          <TransactionsWrapper>
            {dayArr.map((transaction) => (
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
      {renderDay(todayDate, today, 'today')}
      {renderDay(yesterdayDate, yesterday, 'yesterday')}
    </Wrapper>
  );
};

export default TransactionList;

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
