import { randomId } from 'src/utils/randomId';
import { randomValue } from 'src/utils/randomValue';

export type Balance = {
  id: string;
  date: Date;
  value: {
    income: number;
    expense: number;
  };
};

export const balanceData: Balance[] = [
  {
    id: randomId(),
    date: new Date(2021, 5, 11),
    value: {
      income: 8000,
      expense: 0,
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 12),
    value: {
      income: randomValue(500, 6000),
      expense: randomValue(500, 6000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 13),
    value: {
      income: randomValue(500, 4000),
      expense: randomValue(500, 4000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 14),
    value: {
      income: randomValue(500, 4000),
      expense: randomValue(500, 4000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 15),
    value: {
      income: randomValue(500, 4000),
      expense: randomValue(500, 4000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 16),
    value: {
      income: randomValue(500, 4000),
      expense: randomValue(500, 4000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 17),
    value: {
      income: randomValue(500, 4000),
      expense: randomValue(500, 4000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 18),
    value: {
      income: randomValue(500, 4000),
      expense: randomValue(500, 4000),
    },
  },
];
