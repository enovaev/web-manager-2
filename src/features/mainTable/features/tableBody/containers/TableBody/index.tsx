import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'shared/hooks/customReduxHooks';
import { mainTableConfig } from '../../../../config/mainTableConfig';
import { componentController } from '../../../../config/componentController';
import { changeEntity } from '../../../../actions/entityActions';
import {
  ComponentEntity,
  ComponentsProps
} from '../../../../types/configTypes';

import styles from './styles.module.less';

export const TableBody: FC<{}> = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.table);

  const changeAction = useCallback(
    (index: number, propName: string) => (value: string | boolean) => {
      dispatch(changeEntity(index, propName, value));
    },
    []
  );

  // @ts-ignore
  return (
    <tbody>
      {list.map((props, entityIndex: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <tr key={entityIndex}>
          {mainTableConfig.map(({ name }) => (
            <td key={name} className={styles.cellTable}>
              {componentController[name].components.map(
                ({
                  Component,
                  defaultProps,
                  propName
                }: ComponentEntity<ComponentsProps>) => (
                  <Component
                    key={propName}
                    value={props[propName]}
                    onChange={changeAction(entityIndex, propName)}
                    {...defaultProps}
                  />
                )
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
