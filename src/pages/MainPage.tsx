import React, { useState } from 'react';
import Contents from 'src/areas/Contents';
import LeftSideBar from 'src/areas/LeftSideBar';
import RightSideBar, { RightSideBarWrapper } from 'src/areas/RightSideBar';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';

interface MainPageProps {
  setTheme: () => void;
  theme: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ setTheme, theme }) => {
  const [isRightBarOpen, setIsRightBarOpen] = useState(false);

  return (
    <Wrapper isRightBarOpen={isRightBarOpen}>
      <LeftSideBar />
      <Contents />
      <RightSideBar
        theme={theme}
        setTheme={setTheme}
        isRightBarOpen={isRightBarOpen}
        setIsRightBarOpen={() => setIsRightBarOpen(!isRightBarOpen)}
      />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div<{
  isRightBarOpen: boolean;
}>`
  min-height: 100vh;
  background-color: ${cvar('colorBackground')};

  position: relative;

  display: flex;

  overflow-x: hidden;

  ${(props) =>
    props.isRightBarOpen
      ? `
    ${RightSideBarWrapper} {
      @media (max-width: 1150px) {
          display: flex;

          width: 100vw;
          height: 100vh;
        
          position: absolute;
          top: 0;
          right: 0;
      }
    }
  `
      : `${RightSideBarWrapper} {
            @media (max-width: 1150px) {
            
              transform: translateX(100%);
              transition: 0.3s all ease;

              width: 100%;
              height: 100vh;
        
              position: absolute;
              top: 0;
              right: 0;
            }
          }
  `}
`;
