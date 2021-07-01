import React, { FC } from 'react';
import { useSelector } from 'shared/hooks/customReduxHooks';
import { mainTableConfig } from '../../../../config/mainTableConfig';
import { componentController } from '../../../../config/componentController';
import { ComponentEntity } from '../../../../types/configTypes';

export const TableBody: FC<{}> = () => {
  const { list } = useSelector(state => state.table);

  return (
    <tbody>
      {list.map((_, i: number) => (
        <tr key={i}>
          {mainTableConfig.map(({ name }) => (
            <td key={name}>
              {componentController[name].components.map(
                (
                  { Component, defaultProps }: ComponentEntity,
                  index: number
                ) => (
                  <Component key={index} {...defaultProps} />
                )
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
