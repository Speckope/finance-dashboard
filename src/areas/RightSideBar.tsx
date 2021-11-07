import React from 'react';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';

interface RightSideBarProps {}

const RightSideBar: React.FC<RightSideBarProps> = ({}) => {
  return <StyledRightSideBar>Right SideBar</StyledRightSideBar>;
};

const StyledRightSideBar = styled.div`
  width: 33%;

  background-color: ${cvar('colorBackgroundVariant')};
`;

export default RightSideBar;
