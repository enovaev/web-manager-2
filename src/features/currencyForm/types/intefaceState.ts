export type CurrencyListForSubmit = Partial<Record<string, string>>;

export interface CurrencyState {
  list: CurrencyListForSubmit;
}
