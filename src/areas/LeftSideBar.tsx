import React from 'react';
import IconsMenu from 'src/components/IconsMenu';
import LargeButton from 'src/components/LargeButton';
import styled from 'styled-components';

import { ReactComponent as PlusSvg } from '../assets/left-sidebar/plus-icon.svg';
import { ReactComponent as LogoSvg } from '../assets/left-sidebar/logo-icon.svg';
import { cvar } from 'src/theming/cvar';

interface LeftSideBarProps {}

const LeftSideBar: React.FC<LeftSideBarProps> = () => {
  return (
    <StyledLeftSideBar>
      <Logo />
      <IconsMenu />
      <LargeButton clickable borderRadius='0px 15px 15px 15px'>
        <PlusSvg />
      </LargeButton>
    </StyledLeftSideBar>
  );
};

const StyledLeftSideBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding-bottom: 4rem;
  padding-top: 4rem;

  width: 8%;
  max-height: 100vh;

  background-color: ${cvar('colorBackground')};
  border-right: 1px solid ${cvar('colorBackgroundVariant')};
`;

const Logo = styled(LogoSvg)`
  justify-self: flex-start;
  min-width: 40px;
  min-height: 30px;
`;

export default LeftSideBar;
