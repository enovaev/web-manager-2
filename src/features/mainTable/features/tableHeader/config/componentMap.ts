import { FunctionComponent } from 'react';
import { CheckedAll } from '../containers/CheckedAll';

export type HeaderComponentMapType = 'checkAll';

export const componentMap: Record<HeaderComponentMapType, FunctionComponent> = {
  checkAll: CheckedAll
};
