import React, { useLayoutEffect } from 'react';
import { pathStyle } from 'src/theming/shared-styles/path';
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

interface IconsMenuProps {}

const IconsMenu: React.FC<IconsMenuProps> = () => {
  // Set pathLength of all path elements to 1,
  // this way we can do math on strokes based on 1
  useLayoutEffect(() => {
    const pathEl = document.getElementsByTagName('path');

    const pathElArr = Array.from(pathEl);

    pathElArr.forEach((el) => {
      el.setAttribute('pathLength', '1');
    });
  }, []);

  return (
    <Wrapper>
      <SpeedmeterSvg />
      <PurseSvg />
      <CalendarSvg />
      <FolderSvg />
      <NotificationsSvg />
      <ProfileSvg />
      <CardSvg />
      <StatsSvg />
      <CogSvg />
    </Wrapper>
  );
};

export default IconsMenu;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  height: 70%;

  margin-top: 5rem;
  margin-bottom: 5rem;

  // group had opacity on it from Figma, reset it.
  g {
    opacity: 0.4;
    transition: ease 0.15s;
  }

  svg {
    transition: ease 0.3s;
    width: 3rem;
    height: 3rem;

    &:hover {
      // Animations on g, becaouse one svg didn't work correctly
      // (doubled lines and opacity was wrong)
      & g {
        opacity: 0.8;
        transition: ease 0.3s;
      }
    }
  }

  ${pathStyle}
`;
