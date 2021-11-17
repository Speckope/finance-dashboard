import React, { useLayoutEffect, useState } from 'react';
import { pathStyle } from 'src/theming/shared-styles/path';
import { randomId } from 'src/utils/randomId';
import styled from 'styled-components';
import { ReactComponent as CalendarSvg } from '../assets/left-sidebar/calendar-icon.svg';
import { ReactComponent as CardSvg } from '../assets/left-sidebar/card-icon.svg';
import { ReactComponent as CogSvg } from '../assets/left-sidebar/cog-icon.svg';
import { ReactComponent as FolderSvg } from '../assets/left-sidebar/folder-icon.svg';
import { ReactComponent as NotificationsSvg } from '../assets/left-sidebar/notifications-icon.svg';
import { ReactComponent as ProfileSvg } from '../assets/left-sidebar/profile-icon.svg';
import { ReactComponent as PurseSvg } from '../assets/left-sidebar/purse-icon.svg';
import { ReactComponent as SpeedmeterSvg } from '../assets/left-sidebar/speedmeter-icon.svg';
import { ReactComponent as StatsSvg } from '../assets/left-sidebar/stats-icon.svg';
import { ReactComponent as ActiveSVG } from '../assets/right-sidebar/active-icon.svg';

const iconsArr = [
  { item: <CalendarSvg />, id: randomId() },
  { item: <CardSvg />, id: randomId() },
  { item: <CogSvg />, id: randomId() },
  { item: <FolderSvg />, id: randomId() },
  { item: <NotificationsSvg />, id: randomId() },
  { item: <ProfileSvg />, id: randomId() },
  { item: <PurseSvg />, id: randomId() },
  { item: <SpeedmeterSvg />, id: randomId() },
  { item: <StatsSvg />, id: randomId() },
];

interface IconsMenuProps {}

const IconsMenu: React.FC<IconsMenuProps> = () => {
  // State for managing Active Indicator position
  // -25 to align it to a starting icon.
  const [activePosition, setActivePosition] = useState(-25);
  const [activeId, setActiveId] = useState(iconsArr[0].id);

  // Set pathLength of all path elements to 1,
  // this way we can do math on strokes based on 1
  useLayoutEffect(() => {
    const pathEl = document.getElementsByTagName('path');

    const pathElArr = Array.from(pathEl);

    pathElArr.forEach((el) => {
      el.setAttribute('pathLength', '1');
    });
  }, []);

  // Changing position of ActiveIndicator
  // and highlighting active icon
  const changeActivePosition = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    setActiveId(id);
    setActivePosition(
      event.currentTarget.offsetTop - event.currentTarget.offsetHeight / 2 - 12
    );
  };

  return (
    <Wrapper>
      {iconsArr.map((icon) => (
        <IconWrapper
          // Add active className if Icon id is selected
          className={activeId === icon.id ? 'active' : ''}
          key={icon.id}
          onClick={(event) => changeActivePosition(event, icon.id)}
        >
          {icon.item}
        </IconWrapper>
      ))}

      {/* Pass selected icon position as props, will be updated using css*/}
      <ActiveIndicator positionTop={activePosition}>
        <ActiveSVG />
      </ActiveIndicator>
    </Wrapper>
  );
};

export default IconsMenu;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // Space when sceen is small vertically
  gap: 1rem;

  // Needed for ActiveIndicator
  position: relative;

  height: 70%;
  // Need to be 100% for proper active indicator placing
  // Else it's buggy when resizing
  width: 100%;

  margin-top: 5rem;
  @media (max-height: 600px) {
    margin-top: 1rem;
    gap: 0.2rem;
  }
  padding-bottom: 1rem;
`;

const IconWrapper = styled.button`
  background-color: transparent;
  min-height: 3rem;

  &,
  &:link,
  &:visited {
    text-decoration: none;
    border: none;
    cursor: pointer;
  }

  // group had opacity on it from Figma, reset it.
  g {
    opacity: 0.4;
    transition: ease 0.15s;
  }

  svg {
    transition: ease 0.3s;
    width: 3rem;
    height: 3rem;

    :hover {
      // Animations on g, because one svg didn't work correctly
      // (doubled lines and opacity was wrong)
      g {
        opacity: 0.8;
        transition: ease 0.3s;
      }
    }
  }

  ${pathStyle}

  // When icon is selected
  &.active {
    g {
      opacity: 0.8;
    }
  }
`;

const ActiveIndicator = styled.div<{
  positionTop: number;
}>`
  position: absolute;

  height: 9rem;
  width: 2.1rem;

  top: 0;
  left: -1.4rem;
  // use translate, not top property to make transition more performant.
  transform: ${(props) => `translateY(${props.positionTop + 'px'})`};

  transition: 0.2s ease;

  // Svg inside will give subtle shadow with this filter
  filter: drop-shadow(25px 0px 96px rgba(255, 47, 94, 0.12))
    drop-shadow(5px 0px 15.6px rgba(255, 47, 94, 0.24));
`;
