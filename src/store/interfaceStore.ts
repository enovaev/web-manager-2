import { MainTableState } from 'features/mainTable';
import { TagControllerState } from 'features/tagController';
import { AuthRegState } from 'features/authReg';
import { CurrencyState } from 'features/currencyForm';
import { SpecTableState } from 'features/specificationTable';

export interface InterfaceStore {
  table: MainTableState;
  tags: TagControllerState;
  account: AuthRegState;
  currency: CurrencyState;
  specificationTable: SpecTableState;
}
