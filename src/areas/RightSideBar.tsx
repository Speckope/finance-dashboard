import React from 'react';
import styled from 'styled-components';

interface RightSideBarProps {}

const RightSideBar: React.FC<RightSideBarProps> = ({}) => {
  return <StyledRightSideBar>Right SideBar</StyledRightSideBar>;
};

const StyledRightSideBar = styled.div`
  width: 33%;

  background-color: cornsilk;
`;

export default RightSideBar;
