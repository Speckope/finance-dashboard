export type Transaction = {
  id: string;
  type: 'income' | 'expense' | 'transfer';
  value: string;
  title: string;
  description: string;
  date: Date;
};

const randomId = () => {
  return Math.random().toString(36).substring(2, 7);
};

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
const dayBeforeYesterday = new Date(today);
dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

export const transactionsData: Transaction[] = [
  {
    id: randomId(),
    type: 'expense',
    value: '1,250.6',
    title: 'Transfer to Mikey',
    description: 'Online food order',
    date: today,
  },
  {
    id: randomId(),
    type: 'income',
    value: '12,840.00',
    title: 'Salary For the Month of Apr',
    description: 'Monthly salary',
    date: today,
  },
  {
    id: randomId(),
    type: 'transfer',
    value: '230.00',
    title: 'Transfer to Nike',
    description: 'Shopping',
    date: yesterday,
  },
  {
    id: randomId(),
    type: 'expense',
    value: '79,295.00',
    title: 'Payment for my brand new Cadillac',
    description: 'Toys shopping',
    date: yesterday,
  },
  {
    id: randomId(),
    type: 'income',
    value: '58,995',
    title: 'Bonsai tree Sale',
    description: 'Toys shopping',
    date: yesterday,
  },
  {
    id: randomId(),
    type: 'transfer',
    value: '420.69',
    title: 'Thanks for the weed',
    description: 'Weed shopping',
    date: dayBeforeYesterday,
  },
];
