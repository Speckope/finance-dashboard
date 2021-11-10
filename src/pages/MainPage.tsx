import React from 'react';
import Contents from 'src/areas/Contents';
import LeftSideBar from 'src/areas/LeftSideBar';
import RightSideBar from 'src/areas/RightSideBar';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <Wrapper>
      <LeftSideBar />
      <Contents />
      <RightSideBar />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${cvar('colorBackground')};

  display: flex;
`;
