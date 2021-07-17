export type EntityType = {
  id: number;
  check: boolean;
  partname: string;
  name: string;
  tags: number[];
  quantity: string;
  price_value: string;
  price_currency: string;
  price_end_value: string;
  price_end_currency: string;
  price_in_value: string;
  price_in_currency: string;
  profit_value: string;
  profit_currency: string;
  delivery: string;
  cus_house: string;
  nds: string;
  discount: string;
  sale: string;
  visible: boolean;
};

export type PropNamesType = keyof EntityType;

export interface MainTableState {
  list: EntityType[];
  invalid: boolean;
}
