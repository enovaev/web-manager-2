export type EntityType = {
  check: boolean;
  partname: string;
  option: string;
  tags: string[];
};

export type PropNamesType = keyof EntityType;
