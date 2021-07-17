import { FunctionComponent } from 'react';
import { CheckboxProps } from '../components/Checkbox';
import { InputProps } from '../components/Input';
import { PropNamesType } from './interfaceState';
import { TagsProps } from '../components/Tags';
import { SelectProps } from '../components/Select';

// Типы пропсов для копмонентов которые мапим
export type ComponentsProps =
  | CheckboxProps
  | InputProps
  | TagsProps
  | SelectProps;

// Типы названия колонок в таблице
export type TableColumnsType =
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

export interface ComponentEntity<T> {
  Component: FunctionComponent<T>;
  defaultProps: object;
  isCustom?: boolean;
  propName: PropNamesType;
}

interface ComponentControllerCellConfig {
  components: ComponentEntity<any>[];
}

export type ComponentControllerType = Partial<
  Record<TableColumnsType, ComponentControllerCellConfig>
>;

interface MainConfigCell {
  name: TableColumnsType;
  label?: string;
  componentName?: string;
}

export type MainTableConfigType = MainConfigCell[];
