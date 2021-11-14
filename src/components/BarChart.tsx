import { ResponsiveBar } from '@nivo/bar';
import React from 'react';
import { barChartData, barChartDataItem } from 'src/data/barChartData';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';
import Text from './Text';
import { ReactComponent as PieChartSVG } from 'src/assets/right-sidebar/pie-chart-icon.svg';
import { ReactComponent as DownArrowSVG } from 'src/assets/right-sidebar/down-arrow-icon.svg';
import { ReactComponent as UpArrowSVG } from 'src/assets/right-sidebar/up-arrow-icon.svg';
import SmallButton from './SmallButton';
import LargeButton from './LargeButton';

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
      <TopWrapper>
        <VerticalTextWrapper>
          <Text size='2.4rem' font='fontSecondary' fontWeight='500'>
            <h3>24,170</h3>
          </Text>
          <Text color='fontColorSecondary' fontWeight='500'>
            <h4>From 12 Oct - 18 Oct</h4>
          </Text>
        </VerticalTextWrapper>
        <SmallButton>
          <PieChartSVG />
        </SmallButton>
      </TopWrapper>
      <BarChartWrapper>
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
                    fontFamily: cvar('fontSecondary'),
                    fontWeight: 500,
                    fontSize: '1.4rem',
                    fill: cvar('fontColorSecondary'),
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
      </BarChartWrapper>
      <BottomWrapper>
        {/* UPLOADS */}
        <UpDownWrapper>
          <LargeButton color='colorSecondary'>
            <UpArrowSVG />
          </LargeButton>
          <VerticalTextWrapper>
            <Text color='fontColorSecondary' size='1.6rem' fontWeight='500'>
              <h4>Uploads</h4>
            </Text>
            <Text font='fontSecondary' size='2.4rem' fontWeight='500'>
              <p>24,170</p>
            </Text>
          </VerticalTextWrapper>
        </UpDownWrapper>
        {/* DOWNLOADS */}
        <UpDownWrapper>
          <LargeButton>
            <DownArrowSVG />
          </LargeButton>
          <VerticalTextWrapper>
            <Text color='fontColorSecondary' size='1.6rem' fontWeight='500'>
              <h4>Downloads</h4>
            </Text>
            <Text font='fontSecondary' size='2.4rem' fontWeight='500'>
              <p>24,170</p>
            </Text>
          </VerticalTextWrapper>
        </UpDownWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 20rem;

  width: 35rem;
  height: 30rem;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

// Responsive bar should have its own wrapper,
// else it's behaviour can be unexpected
const BarChartWrapper = styled.div`
  width: 100%;
  height: 20rem;
`;

const VerticalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UpDownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  width: 90%;

  margin-top: 6rem;
`;

export default BarChart;
