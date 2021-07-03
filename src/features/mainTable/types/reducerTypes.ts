export type EntityType = {
  check: boolean;
  partname: string;
  name: string;
  tags: string[];
  quantity: string;
  price_value: string;
  price_currency: string;
};

export type PropNamesType = keyof EntityType;
