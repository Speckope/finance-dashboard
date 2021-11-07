import { css } from 'styled-components';
import { dash } from '../animations/dash';
import { cvar } from '../cvar';

export const pathStyle = css`
  path {
    fill: ${cvar('svgColor')};
    stroke-width: 0.2;
    stroke: ${cvar('svgColor')};
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${dash} 3s forwards;
  }
`;
