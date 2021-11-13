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
      <CardWrapper>
        <CreditCard />
      </CardWrapper>
      <BarChart />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 33%;
  max-width: 48rem;
  max-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  background-color: ${cvar('colorBackgroundVariant')};

  padding-top: 5rem;
  padding-left: 4rem;
  padding-right: 6rem;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 9rem;
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
