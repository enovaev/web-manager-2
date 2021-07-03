import React, { FC } from 'react';
import { mainTableConfig } from '../../../../config/mainTableConfig';
import {
  componentMap,
  HeaderComponentMapType
} from '../../config/componentMap';

import styles from './styles.module.less';

export const TableHeader: FC<{}> = () => {
  return (
    <thead>
      <tr className={styles.headerRow}>
        {mainTableConfig.map(({ name, label, componentName }) => {
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
