import { randomValue } from '../utils/randomValue';

export interface BarChartDataItem {
  date: Date;
  uploads: number;
  downloads: number;
}

export const barChartData: BarChartDataItem[] = [
  {
    date: new Date(2021, 11, 12),
    uploads: randomValue(5000, 30000),
    downloads: randomValue(5000, 30000),
  },
  {
    date: new Date(2021, 11, 13),
    uploads: randomValue(5000, 30000),
    downloads: randomValue(5000, 30000),
  },
  {
    date: new Date(2021, 11, 14),
    uploads: randomValue(5000, 30000),
    downloads: randomValue(5000, 30000),
  },
  {
    date: new Date(2021, 11, 15),
    uploads: randomValue(5000, 30000),
    downloads: randomValue(5000, 30000),
  },
  {
    date: new Date(2021, 11, 16),
    uploads: randomValue(5000, 30000),
    downloads: randomValue(5000, 30000),
  },
  {
    date: new Date(2021, 11, 17),
    uploads: randomValue(5000, 30000),
    downloads: randomValue(5000, 30000),
  },
  {
    date: new Date(2021, 11, 18),
    uploads: randomValue(5000, 30000),
    downloads: randomValue(5000, 30000),
  },
];
