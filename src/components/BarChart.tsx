import { ComputedDatum, ResponsiveBar } from '@nivo/bar';
import React, { useRef, useState } from 'react';
import { barChartData } from 'src/data/barChartData';
import { cvar } from 'src/theming/cvar';
import styled from 'styled-components';
import Text from './Text';
import { ReactComponent as PieChartSVG } from 'src/assets/right-sidebar/pie-chart-icon.svg';
import { ReactComponent as DownArrowSVG } from 'src/assets/right-sidebar/down-arrow-icon.svg';
import { ReactComponent as UpArrowSVG } from 'src/assets/right-sidebar/up-arrow-icon.svg';
import SmallButton from './SmallButton';
import LargeButton from './LargeButton';
import { Tooltip } from './Tooltipt';
import { formatBarData } from 'src/utils/formatBarData';

interface BarChartProps {}

const BarChart: React.FC<BarChartProps> = () => {
  const [values, setValues] = useState<{
    uploads: number;
    downloads: number;
  }>({
    uploads: barChartData[0].uploads,
    downloads: barChartData[0].downloads,
  });

  const barWrapperRef = useRef<HTMLDivElement | null>(null);

  // Click on Bar
  // TODO Event listeners just get stacked and not removed
  // It happends bc of a new function being created on each click, but I don't
  // know how to solve it.
  const barClick: (
    datum: ComputedDatum<{
      date: string;
      uploads: number;
      downloads: number;
    }> & {
      color: string;
    },
    event: React.MouseEvent<Element>
  ) => void = (point, event) => {
    var target = event.target as SVGRectElement;

    const changeBack = () => {
      target.style.fill = cvar('colorPrimary');
    };

    setValues({
      downloads: point.data.downloads,
      uploads: point.data.uploads,
    });

    target.style.fill = cvar('colorSecondary');

    // When you click outside of a bar or second time on it,
    // Change the color back!
    barWrapperRef.current?.addEventListener('click', changeBack, {
      // This will remove listener after it's invoked!
      once: true,
    });
  };

  return (
    <Wrapper>
      <TopWrapper>
        <VerticalTextWrapper>
          <Text size='2.4rem' font='fontSecondary' fontWeight='500'>
            <h3>
              Total: {/* return total number of downloads + uploads  */}
              {barChartData
                .map((item) => item.downloads + item.uploads)
                .reduce((p, c) => p + c)}
            </h3>
          </Text>
          <Text color='fontColorSecondary' fontWeight='500'>
            <h4>From 12 Dec - 18 Dec</h4>
          </Text>
        </VerticalTextWrapper>
        <SmallButton clickable>
          <PieChartSVG />
        </SmallButton>
      </TopWrapper>
      <BarChartWrapper ref={barWrapperRef}>
        <ResponsiveBar
          data={formatBarData(barChartData)}
          keys={['downloads']}
          indexBy='date'
          margin={{ top: 50, right: 0, bottom: 50, left: 0 }}
          // padding of bars
          padding={0.3}
          colors={cvar('colorPrimary')}
          onClick={barClick}
          borderRadius={6}
          axisTop={null}
          axisRight={null}
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
          tooltip={(point) => (
            <Tooltip>
              <Text
                fontWeight='500'
                color='colorBackground'
                font='fontSecondary'
                size='1.3rem'
              >
                <p>{point.value}</p>
              </Text>
            </Tooltip>
          )}
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
              <p>{values?.uploads}</p>
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
              <p>{values?.downloads}</p>
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

  margin-top: 3rem;

  @media (max-height: 700px) {
    margin-top: 0;
  }

  width: 35rem;
  min-height: 40rem;
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
  align-items: center;
  justify-content: space-between;

  width: 95%;

  margin-top: 6rem;
  @media (max-height: 700px) {
    margin-top: 1rem;
  }
`;

export default BarChart;
