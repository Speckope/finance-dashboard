import React, { useContext, useEffect, useRef, useState } from 'react';
import { ResponsiveLine, Serie } from '@nivo/line';
import styled, { ThemeContext } from 'styled-components';
import { balanceData } from 'src/data/balanceData';
import { formatBalanceData } from 'src/utils/formatBalnceData';
import { cvar } from 'src/theming/cvar';
import { Theme } from '@nivo/core';
import Text from './Text';
import { Tooltip } from './Tooltipt';
import { useSize } from 'src/hooks/useSize';

interface LineChartProps {}

const LineChart: React.FC<LineChartProps> = () => {
  // Ref for element we want to watch size
  const LCWrappRef = useRef<HTMLDivElement | null>(null);
  // Get size with observer hook
  const size = useSize(LCWrappRef);

  // Create theme for ResponsiveLine from our SC theme
  const themeContext = useContext(ThemeContext);
  const lineTheme: Theme = {
    crosshair: {
      line: {
        stroke: themeContext.colors.primary,
        strokeWidth: 2,
        strokeOpacity: 0.5,
      },
    },
    textColor: themeContext.fontColors.secondary,
    fontFamily: themeContext.fonts.secondary,
    // If it exists(else TypeError) and width is greater smaller than 300
    // make font smaller
    fontSize: size?.width && size.width < 300 ? 9 : 13,
  };

  // In case of future switching to other data displaying on the chart,
  // use state for it.
  const [formattedData, setFormattedData] = useState<Serie[]>([]);

  useEffect(() => {
    setFormattedData(formatBalanceData(balanceData));
  }, []);

  return (
    <Wrapper ref={LCWrappRef}>
      <ResponsiveLine
        data={formattedData}
        margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
        xScale={{
          type: 'time',
          // native will read correctly from new Date()
          // no need to format with custom d3 values.
          format: 'native',
          // We're not using UTC
          useUTC: false,
          // What time period is on ticks
          precision: 'day',
        }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
          stacked: true,
        }}
        // No axis top or right
        axisTop={null}
        axisRight={null}
        axisBottom={{
          // No line ticks
          tickSize: 0,
          tickPadding: 15,
          format: '%B %e',
          tickValues: 'every 1 day',
          // Once wrapper width is less than 500, rotate ticks for readability
          tickRotation: size?.width && size.width < 500 ? -50 : 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 30,
          // Tick Values define how many ticks will be rendered on yAxis.
          // (not counting minumin Value)
          // Will render different number sometimes to accomodate to data.
          // It should usually render around +-2K on yAxis (with mock data)
          // either way it shouldn't be cluttered.
          tickValues: 5,
          // Return values in tousands '1K' '2K' '20K'
          format: (value: number) => {
            return Math.round(value / 1000) + 'K';
          },
        }}
        // For mouse interactivity. False means no tooltips or crosshair.
        // Alternative is enableSlices (different tooltip will be rendered)
        // with crosshair only for specified axis
        useMesh={true}
        // No points on line or grid
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        animate={true}
        // Our theme
        theme={lineTheme}
        // Custom tooltip. We get access to point
        tooltip={(point) => (
          <Tooltip>
            <Text
              fontWeight='500'
              color='colorBackground'
              font='fontSecondary'
              size='1.3rem'
            >
              <p>{point.point.data.yFormatted}</p>
            </Text>
          </Tooltip>
        )}
        // Line color
        colors={themeContext.colors.secondary}
        lineWidth={4}
        // Line rendering algorithm
        curve='natural'
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 28rem;
  min-height: 23rem;

  // For some reason it has to stay for chart to have correct font-family
  // Defining font family both here and on lineTheme font-family is necessary.
  font-family: ${cvar('fontSecondary')};
`;

export default LineChart;
