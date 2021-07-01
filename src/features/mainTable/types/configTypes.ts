import { ComponentType } from 'react';

export type TableColumnsType = 'check' | 'partname' | 'option';

export interface ComponentEntity {
  Component: ComponentType;
  defaultProps: object;
}

interface ComponentControllerCellConfig {
  components: ComponentEntity[];
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
