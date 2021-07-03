export type EntityType = {
  check: boolean;
  partname: string;
  tags: string[];
  exw_value: string;
  exw_currency: string;
};

export type PropNamesType = keyof EntityType;
