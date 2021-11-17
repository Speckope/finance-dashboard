import { keyframes } from 'styled-components';
import { cvar } from '../cvar';

// SmallButton border animation
export const border = keyframes`
    from {
      border: 1px solid ${cvar('colorBackground')};
    }
    to {
      border: 1px solid ${cvar('borderColor')};
    }
  
`;
