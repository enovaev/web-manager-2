import React, { FC } from 'react';
import {
  componentMap,
  HeaderComponentMapType
} from '../../config/componentMap';

import styles from './styles.module.less';

interface ConfigItemType {
  name: string;
  label?: string;
  componentName?: string;
}

interface TableHeaderProps {
  tableConfig: ConfigItemType[];
}

export const TableHeader: FC<TableHeaderProps> = ({ tableConfig }) => {
  return (
    <thead>
      <tr className={styles.headerRow}>
        {tableConfig.map(({ name, label, componentName }) => {
          const Component =
            componentName &&
            componentMap[componentName as HeaderComponentMapType];

          return (
            <th className={styles.headerCell} key={name}>
              {label}
              {Component && <Component />}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
