export const tableTypes = {
  mainTable: 'mainTable',
  specTable: 'specTable'
} as const;

export type TableTypes = keyof typeof tableTypes;
