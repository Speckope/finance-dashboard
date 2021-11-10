import { keyframes } from 'styled-components';

// Animation for paths
export const dash = keyframes`
    0% {
      stroke-dashoffset: 1;
      fill-opacity: 0
    }

    50% {
      stroke-width: 0.2;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-width: 0;
      fill-opacity: 1;
    }
`;
