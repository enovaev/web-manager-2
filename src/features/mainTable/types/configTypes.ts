import { ElementType } from 'react';
import { PropNamesType } from './interfaceState';

// Типы названия колонок в таблице
type TableColumnsType =
  | 'check'
  | 'number'
  | 'partname'
  | 'name'
  | 'tags'
  | 'price'
  | 'quantity'
  | 'price_end'
  | 'price_in'
  | 'action';

interface ComponentControllerCellConfig {
  components: {
    Component: ElementType;
    defaultProps: object;
    isCustom?: boolean;
    propName: PropNamesType;
  }[];
}

export type ComponentControllerType = Record<
  Exclude<TableColumnsType, 'action' | 'number'>,
  ComponentControllerCellConfig
>;

interface MainConfigCell {
  name: TableColumnsType;
  label?: string;
  componentName?: string;
}

export type MainTableConfigType = MainConfigCell[];
