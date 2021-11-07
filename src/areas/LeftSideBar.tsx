import { motion } from 'framer-motion';
import React from 'react';
import IconsMenu from 'src/components/IconsMenu';
import LargeButton from 'src/components/LargeButton';
import styled from 'styled-components';

import { ReactComponent as PlusSvg } from '../assets/left-sidebar/plus-icon.svg';
import { ReactComponent as LogoSvg } from '../assets/left-sidebar/logo-icon.svg';
import { cvar } from 'src/theming/cvar';

interface LeftSideBarProps {}

const LeftSideBar: React.FC<LeftSideBarProps> = ({}) => {
  return (
    <StyledLeftSideBar>
      <Logo />
      <IconsMenu />
      <LargeButton>
        <PlusSvg />
      </LargeButton>
    </StyledLeftSideBar>
  );
};

const StyledLeftSideBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 4rem;

  width: 8%;

  background-color: ${cvar('colorBackground')};
  border-right: 1px solid ${cvar('colorBackgroundVariant')};
`;

const Logo = styled(motion(LogoSvg))`
  justify-self: flex-start;

  margin-top: 3rem;
`;

export default LeftSideBar;
