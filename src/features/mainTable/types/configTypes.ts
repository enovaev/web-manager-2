import { FunctionComponent } from 'react';
import { CheckboxProps } from '../components/Checkbox';
import { InputProps } from '../components/Input';
import { PropNamesType } from './reducerTypes';

// Типы пропсов для копмонентов которые мапим
export type ComponentsProps = CheckboxProps | InputProps;

// Типы названия колонок в таблице
export type TableColumnsType = 'check' | 'partname' | 'option';

export interface ComponentEntity<T> {
  Component: FunctionComponent<T>;
  defaultProps: object;
  propName: PropNamesType;
}

interface ComponentControllerCellConfig {
  components: ComponentEntity<any>[];
}

export type ComponentControllerType = Record<
  TableColumnsType,
  ComponentControllerCellConfig
>;

interface MainConfigCell {
  name: TableColumnsType;
  label: string;
}

export type MainTableConfigType = MainConfigCell[];
