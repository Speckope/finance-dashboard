import { randomId } from 'src/utils/randomId';
import { randomValue } from 'src/utils/randomValue';

type Balance = {
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
    date: new Date(2021, 5, 12),
    value: {
      income: randomValue(5000, 100000),
      expense: randomValue(5000, 100000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 13),
    value: {
      income: randomValue(5000, 100000),
      expense: randomValue(5000, 100000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 14),
    value: {
      income: randomValue(5000, 100000),
      expense: randomValue(5000, 100000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 15),
    value: {
      income: randomValue(5000, 100000),
      expense: randomValue(5000, 100000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 16),
    value: {
      income: randomValue(5000, 100000),
      expense: randomValue(5000, 100000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 17),
    value: {
      income: randomValue(5000, 100000),
      expense: randomValue(5000, 100000),
    },
  },
  {
    id: randomId(),
    date: new Date(2021, 5, 18),
    value: {
      income: randomValue(5000, 100000),
      expense: randomValue(5000, 100000),
    },
  },
];
