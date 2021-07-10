import { MainTableState } from 'features/mainTable';
import { TagControllerState } from 'features/tagController';

export interface InterfaceStore {
  table: MainTableState;
  tags: TagControllerState;
}
