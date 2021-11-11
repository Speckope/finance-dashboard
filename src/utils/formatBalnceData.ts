import { Serie } from '@nivo/line';
import { Balance } from 'src/data/balanceData';

// type Formatted = Array<{
//   id: string | number;
//   data: Array<{
//     x: number | string | Date;
//     y: number | string | Date;
//   }>;
// }>;

export const formatBalanceData = (data: Balance[]) => {
  // Data shape from Nivo
  let formattedData: Serie[] = [
    {
      id: 'balance',
      data: [],
    },
  ];

  // Push new coordinates object into data for every balance
  data.forEach((balance, i) => {
    // For first item just create initial account value on y
    if (i === 0) {
      formattedData[0].data.push({
        x: balance.date,
        y: balance.value.income - balance.value.expense,
      });
    } else {
      formattedData[0].data.push({
        x: balance.date,
        // Accumulate from previous values to create continous value
        y:
          (formattedData[0].data[i - 1].y as number) +
          balance.value.income -
          balance.value.expense,
      });
    }
  });

  return formattedData;
};
