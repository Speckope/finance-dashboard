import BarChart from 'src/components/BarChart';
import CreditCard from 'src/components/CreditCard';
import SmallButton, { StyledSmallButton } from 'src/components/SmallButton';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';
import { ReactComponent as MessageSVG } from '../assets/top-area/message-icon.svg';
import { ReactComponent as NotificationsSVG } from '../assets/top-area/notifications-icon.svg';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

interface RightSideBarProps {}

const RightSideBar: React.FC<RightSideBarProps> = () => {
  const [isRightBurgirOpen, setIsRightBurgirOpen] = useState(false);

  return (
    <RightSideBarWrapper isRightBurgirOpen={isRightBurgirOpen}>
      <Hamburger
        size={25}
        direction='left'
        color={cvar('colorPrimary')}
        label='Show right sidebar'
        toggled={isRightBurgirOpen}
        toggle={setIsRightBurgirOpen}
      />
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
    </RightSideBarWrapper>
  );
};

const RightSideBarWrapper = styled.div<{
  isRightBurgirOpen: boolean;
}>`
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

  .hamburger-react {
    position: absolute;

    z-index: 30;

    display: none;

    top: 1rem;
    right: 0.5rem;
  }

  @media (max-width: 1150px) {
    ${(props) =>
      props.isRightBurgirOpen
        ? `
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 0;
        padding-right: 6rem;

        .hamburger-react {
          top: 1rem;
          right: -5rem;
        }
        `
        : `
      * {
        display: none;
      };
      width: 6rem;
      padding: 0;
    `}

    // Without .hamburger-react *  inside elements (burger itself is invisible)
    .hamburger-react,
    .hamburger-react * {
      display: inline;
    }
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
  gap: 1rem;

  ${StyledSmallButton}:last-child {
    margin-left: 3rem;
  }
`;

export default RightSideBar;
