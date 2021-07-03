import { FunctionComponent } from 'react';
import { CheckedAll } from '../containers/CheckedAll';
import { AddPosition } from '../containers/AddPosition';

export type HeaderComponentMapType = 'checkAll' | 'addPosition';

export const componentMap: Record<HeaderComponentMapType, FunctionComponent> = {
  checkAll: CheckedAll,
  addPosition: AddPosition
};
