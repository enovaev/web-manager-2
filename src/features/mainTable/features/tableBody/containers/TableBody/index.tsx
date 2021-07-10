import React, { FC, useCallback } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'shared/hooks/customReduxHooks';
import { mainTableConfig } from '../../../../config/mainTableConfig';
import { componentController } from '../../../../config/componentController';
import { DeletePosition } from '../../../../containers/DeletePosition';
import { getSortedTableList } from '../../../../reducers/mainTableReducer/selectors';
import { changeEntity } from '../../../../actions/entityActions';
import {
  ComponentEntity,
  ComponentsProps
} from '../../../../types/configTypes';

import styles from './styles.module.less';

export const TableBody: FC<{}> = () => {
  const dispatch = useDispatch();
  const { list, invalid } = useSelector(getSortedTableList);

  const changeAction = useCallback(
    (id: number, propName: string) => (value: string | boolean) => {
      dispatch(changeEntity(id, propName, value));
    },
    []
  );

  return (
    <tbody>
      {list.map((props, entityIndex: number) => (
        <tr
          // eslint-disable-next-line react/no-array-index-key
          key={props.id}
          className={cx(styles.tableRow, {
            [styles.checked]: props.check
          })}
        >
          {mainTableConfig.map(({ name }) => (
            <td key={name}>
              <div className={styles.componentWrapper}>
                {componentController[name]?.components?.map(
                  ({
                    Component,
                    defaultProps,
                    propName
                  }: ComponentEntity<ComponentsProps>) => (
                    <Component
                      key={propName}
                      value={props[propName] as any} // TODO
                      onChange={changeAction(props.id, propName)}
                      defaultProps={defaultProps}
                      invalid={invalid}
                    />
                  )
                )}
                {name === 'action' && <DeletePosition id={props.id} />}
                {name === 'number' && entityIndex + 1}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
