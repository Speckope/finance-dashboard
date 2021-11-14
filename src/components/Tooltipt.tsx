import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';

export const Tooltip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 3.1rem;
  min-width: 6rem;
  border-radius: 5px;

  background-color: ${cvar('fontColorPrimary')};
`;
