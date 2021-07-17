import { EntityType } from 'features/mainTable';

const getPercent = (value: string): number => (Number(value) + 100) / 100;

export const formatDataToNumber = (entity: EntityType) => ({
  quantity: Number(entity.quantity),
  price_value: Number(entity.price_value),
  delivery: getPercent(entity.delivery),
  nds: getPercent(entity.nds),
  cus_house: getPercent(entity.cus_house),
  discount: getPercent(entity.discount),
  sale: getPercent(entity.sale)
});

export const formatToString = (
  priceIn: number,
  priceEnd: number,
  profit: number
) => ({
  price_in_value: priceIn.toFixed(2),
  price_end_value: priceEnd.toFixed(2),
  profit_value: profit.toFixed(2)
});
