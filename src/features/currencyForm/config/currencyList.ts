export type CurrencyValues = 'RUB' | 'USD' | 'EUR' | 'GBP' | 'CHF' | 'BYN';

export interface CurrencyItemType {
  name: string;
  value: CurrencyValues;
}

export const currencyItems: CurrencyItemType[] = [
  {
    name: 'RUB',
    value: 'RUB'
  },
  {
    name: 'USD',
    value: 'USD'
  },
  {
    name: 'EUR',
    value: 'EUR'
  },
  {
    name: 'GBP',
    value: 'GBP'
  },
  {
    name: 'CHF',
    value: 'CHF'
  },
  {
    name: 'BYN',
    value: 'BYN'
  }
];
