import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { ReactComponent as BoostersSVG } from '../assets/contents/boosters-icon.svg';
import { ReactComponent as CarLoanSVG } from '../assets/contents/car-loan-icon.svg';
import { ReactComponent as HomeLoanSVG } from '../assets/contents/home-loan-icon.svg';
import { ReactComponent as MaintenanceSVG } from '../assets/contents/maintenance-icon.svg';
import { ReactComponent as SavingsSVG } from '../assets/contents/savings-icon.svg';
import Card from './Card';

interface CardsListProps {}

const CardsList: React.FC<CardsListProps> = ({}) => {
  return (
    <Wrapper>
      <Card>
        <HomeLoanSVG />
        <Text color='fontColorSecondary' size='1.4rem'>
          <h3>Home Loan</h3>
        </Text>
      </Card>

      <Card>
        <CarLoanSVG />
        <Text color='fontColorSecondary' size='1.4rem'>
          <h3>Car Loan</h3>
        </Text>
      </Card>

      <Card>
        <MaintenanceSVG />
        <Text color='fontColorSecondary' size='1.4rem'>
          <h3>Maintenance</h3>
        </Text>
      </Card>

      <Card>
        <BoostersSVG />
        <Text color='fontColorSecondary' size='1.4rem'>
          <h3>Boosters</h3>
        </Text>
      </Card>

      <Card>
        <SavingsSVG />
        <Text color='fontColorSecondary' size='1.4rem'>
          <h3>Savings</h3>
        </Text>
      </Card>
    </Wrapper>
  );
};

export default CardsList;

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  gap: 1rem;
  justify-content: space-between;

  width: 100%;
  max-width: 80rem;
`;
