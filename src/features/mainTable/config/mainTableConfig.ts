import { MainTableConfigType } from '../types/configTypes';

export const mainTableConfig: MainTableConfigType = [
  {
    name: 'check',
    componentName: 'checkAll'
  },
  {
    name: 'number',
    label: '№'
  },
  {
    name: 'partname',
    label: 'Partname'
  },
  {
    name: 'name',
    label: 'Position name'
  },
  {
    name: 'tags',
    label: 'Tags'
  },
  {
    name: 'price',
    label: 'ExW Price'
  },
  {
    name: 'quantity',
    label: 'Quantity'
  },
  {
    name: 'action',
    componentName: 'addPosition'
  }
];
