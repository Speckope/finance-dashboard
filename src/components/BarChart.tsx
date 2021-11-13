import { ResponsiveBar } from '@nivo/bar';
import React from 'react';
import { barChartData, barChartDataItem } from 'src/data/barChartData';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';
import Text from './Text';

interface BarChartProps {}

const formatBarData = (data: barChartDataItem[]) => {
  return data.map((item) => ({
    date: (() => {
      const dateArr = item.date.toDateString().split(' ');
      return dateArr[2].toString() + ' ' + dateArr[1];
    })(),
    downloads: item.downloads,
  }));
};

const BarChart: React.FC<BarChartProps> = () => {
  return (
    <Wrapper>
      <Text>
        <h3>234234</h3>
      </Text>
      <ResponsiveBar
        data={formatBarData(barChartData)}
        keys={['downloads']}
        indexBy='date'
        margin={{ top: 50, right: 0, bottom: 50, left: 0 }}
        // padding of bars
        padding={0.3}
        colors={cvar('colorPrimary')}
        axisTop={null}
        axisRight={null}
        borderRadius={6}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          ticksPosition: 'before',
          // Accepts only svg elements, and we want 2 lines
          // 1st with day and 2nd with month!
          renderTick: ({ textAnchor, textX, textY, value, x, y }) => {
            return (
              <g
                transform={`translate(${x},${y})`}
                style={{
                  opacity: '0.4',
                  fontFamily: cvar('fontSecondary'),
                  fontWeight: 500,
                  fontSize: '1.4rem',
                }}
              >
                <text
                  x='0'
                  y='0'
                  textAnchor={textAnchor}
                  transform={`translate(${textX},${textY})`}
                >
                  <tspan x='0' dy='1.2em'>
                    {value.split(' ')[0]}
                  </tspan>
                  <tspan x='0' dy='1.2em'>
                    {value.split(' ')[1]}
                  </tspan>
                </text>
              </g>
            );
          },
        }}
        enableGridY={false}
        enableLabel={false}
        axisLeft={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        // I don't know what this is
        role='application'
        // Accessibility
        ariaLabel='Chart showing number of downloads each day'
        barAriaLabel={function (e) {
          return `${e.data.downloads} on day ${e.data.date}`;
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;

  width: 35rem;
  height: 30rem;
`;

export default BarChart;
