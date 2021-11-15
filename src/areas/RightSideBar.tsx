import BarChart from 'src/components/BarChart';
import CreditCard from 'src/components/CreditCard';
import SmallButton, { StyledSmallButton } from 'src/components/SmallButton';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';
import { ReactComponent as MessageSVG } from '../assets/top-area/message-icon.svg';
import { ReactComponent as NotificationsSVG } from '../assets/top-area/notifications-icon.svg';

interface RightSideBarProps {}

const RightSideBar: React.FC<RightSideBarProps> = () => {
  return (
    <Wrapper>
      <TopIconsWrapper>
        <SmallButton clickable>
          <MessageSVG />
        </SmallButton>
        <SmallButton clickable>
          <NotificationsSVG />
        </SmallButton>
        <SmallButton clickable>PIC</SmallButton>
      </TopIconsWrapper>
      <CardBarChartWrapper>
        <CreditCard />
        <BarChart />
      </CardBarChartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 33%;
  max-width: 48rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  justify-content: space-between;

  background-color: ${cvar('colorBackgroundVariant')};

  padding-top: 4rem;
  padding-left: 4rem;
  padding-right: 6rem;
  padding-bottom: 4rem;
`;

const CardBarChartWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 87%;

  margin-top: 2rem;

  justify-content: space-between;
  align-items: center;
`;

const TopIconsWrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: 1rem;

  ${StyledSmallButton}:last-child {
    margin-left: 3rem;
  }
`;

export default RightSideBar;
