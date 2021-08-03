import { MainTableState } from 'features/mainTable';
import { TagControllerState } from 'features/tagController';
import { AuthRegState } from 'features/authReg';

export interface InterfaceStore {
  table: MainTableState;
  tags: TagControllerState;
  account: AuthRegState;
}
