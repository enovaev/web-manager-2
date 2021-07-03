import React, { FC } from 'react';
import { useDispatch } from 'shared/hooks/customReduxHooks';
import { addPosition } from 'features/mainTable/actions/entityActions';
import { mainTableConfig } from '../../../../config/mainTableConfig';
import {
  componentMap,
  HeaderComponentMapType
} from '../../config/componentMap';

import styles from './styles.module.less';

export const TableHeader: FC<{}> = () => {
  const dispatch = useDispatch();

  return (
    <thead>
      <tr className={styles.headerRow}>
        {mainTableConfig.map(({ name, label, componentName }) => {
          const Component =
            componentName &&
            componentMap[componentName as HeaderComponentMapType];

          return (
            <th className={styles.headerCell} key={name}>
              {/* eslint-disable-next-line react/button-has-type */}
              <button onClick={() => dispatch(addPosition())}>click</button>
              {label}
              {Component && <Component />}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
