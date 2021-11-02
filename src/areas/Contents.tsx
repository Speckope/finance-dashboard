import React from 'react';
import styled from 'styled-components';

interface ContentsProps {}

const Contents: React.FC<ContentsProps> = ({}) => {
  return <StyledContents>Contents</StyledContents>;
};

const StyledContents = styled.div`
  flex: 1;
  background-color: blueviolet;
`;

export default Contents;
