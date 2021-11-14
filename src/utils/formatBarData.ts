import { BarChartDataItem } from 'src/data/barChartData';

export const formatBarData = (data: BarChartDataItem[]) => {
  return data.map((item) => ({
    date: (() => {
      const dateArr = item.date.toDateString().split(' ');
      return dateArr[2].toString() + ' ' + dateArr[1];
    })(),
    downloads: item.downloads,
    uploads: item.uploads,
  }));
};
