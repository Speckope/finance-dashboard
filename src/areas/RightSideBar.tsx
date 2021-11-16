import BarChart from 'src/components/BarChart';
import CreditCard from 'src/components/CreditCard';
import SmallButton, { StyledSmallButton } from 'src/components/SmallButton';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';
import { ReactComponent as MessageSVG } from '../assets/top-area/message-icon.svg';
import { ReactComponent as NotificationsSVG } from '../assets/top-area/notifications-icon.svg';
import { ReactComponent as ActiveSVG } from '../assets/right-sidebar/active-icon.svg';

interface RightSideBarProps {
  setIsRightBarOpen: () => void;
  isRightBarOpen: boolean;
}

const RightSideBar: React.FC<RightSideBarProps> = ({ setIsRightBarOpen }) => {
  return (
    <RightSideBarWrapper>
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
      <Toggle onClick={setIsRightBarOpen} className='bumba'>
        <ActiveSVG />
      </Toggle>
    </RightSideBarWrapper>
  );
};

export const RightSideBarWrapper = styled.div`
  width: 33%;
  max-width: 48rem;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;

  background-color: ${cvar('colorBackgroundVariant')};

  padding: 4rem 6rem 4rem 4rem;

  transition: 0.3s all ease;

  // Invisible circle from card was over top buttons
  // when on smaller screens
  ${StyledSmallButton} {
    z-index: 20;
  }

  @media (max-width: 350px) {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 340px;
  }

  @media (max-height: 700px) {
    padding-top: 1rem;
    padding-bottom: 0;
  }
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

  align-self: flex-end;
  gap: 1rem;

  ${StyledSmallButton}:last-child {
    margin-left: 3rem;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 9rem;
  width: 2.1rem;

  padding: 10rem 0rem 10rem 4rem;

  position: absolute;
  top: 50%;
  left: -3.5rem;
  transform: translate(-50%, -50%);

  svg {
    transform: rotateY(180deg) translateY(-50%);
  }

  @media (max-width: 1150px) {
    display: block;
    height: 9rem;
    width: 2.1rem;
  }
`;

export default RightSideBar;
