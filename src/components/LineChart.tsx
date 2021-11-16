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
  // Get size with observer hook
  const LCWrappRef = useRef<HTMLDivElement | null>(null);
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
    fontSize: size?.width && size.width > 300 ? 13 : 9,
  };

  console.log(size?.width);

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
          // No need to format with custom d3 values.
          format: 'native',
          // We're not using UTC
          useUTC: false,
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
          // TODO Once width is less than 700.
          tickRotation: size?.width && size.width > 500 ? 0 : -50,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 30,
          // Tick Values define how many values will be rendered on yAxis.
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

  height: 28rem;
  min-height: 23rem;

  // For some reason it has to stay for chart to have correct font-family
  // Defining font'family here and on lineTheme font-family is neccesary.
  font-family: ${cvar('fontSecondary')};

  width: 100%;
`;

export default LineChart;
