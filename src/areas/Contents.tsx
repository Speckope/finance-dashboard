import React from 'react';
import Card from 'src/components/Card';
import styled from 'styled-components';
import Text from '../components/Text';

import { ReactComponent as BoostersSVG } from '../assets/contents/boosters-icon.svg';

interface ContentsProps {}

const Contents: React.FC<ContentsProps> = ({}) => {
  return (
    <StyledContents>
      <Card>
        <BoostersSVG />
        <Text size='1rem'>
          <h3>Booster</h3>
        </Text>
      </Card>
    </StyledContents>
  );
};

const StyledContents = styled.div`
  flex: 1;
  background-color: blueviolet;
`;

export default Contents;
