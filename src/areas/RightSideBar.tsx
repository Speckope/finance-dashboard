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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 33%;
  max-height: 100vh;

  background-color: ${cvar('colorBackgroundVariant')};
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

  margin-top: 5rem;
  margin-right: 7.5rem;

  ${StyledSmallButton}:last-child {
    margin-left: 3rem;
  }
`;

export default RightSideBar;
